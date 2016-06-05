// js/services/database

;(function(angular, $, _){
	
	angular.module('mthTipApp')
		.factory('dataBase',function($timeout){
			return {
				customers: TAFFY([
					{
						id: 0
						,name: 'Click to Enter a Name'	
						
					}
				// end of customers
				])
				,charges: TAFFY([
					{
						id:0
						,charge:'0'
						,customer_id: 0
						,sharedCharge: false
						,sharedCustomers:[]
						,noEdit:false
						,name: 'Shared Charge'
					}
					//end of charges
				])
				,addCharge: function(cid, charge){
					var lastIn =  this.charges().last().id +1;
					if(isNaN(lastIn)){
						lastIn = 0;	
					}
					console.log(lastIn);
					this.charges.insert({id:this.chargeID, customer_id: cid, charge:charge, sharedCharge:false, sharedCustomer:[], noEdit:false});
					
					this.chargeID++;
				}
				,addASharedCharge : function(){
					var lastIn =  this.charges().last().id +1;
					if(isNaN(lastIn)){
						lastIn = 0;	
					}
					console.log(this.chargeID);
					this.charges.insert({id:this.chargeID, charge:'0', sharedCharge:true, sharedCustomers:[], name: 'Click to Edit Name of Shared Charge', noEdit: true});
					
					this.chargeID++;
						
				}
				,addCustomerToSharedCharge: function(cid, chid, $event, charge){
					var self = this
						,obj = $($event.target)
						,args = arguments;
					$timeout(function(){
						if(obj.is(':checked')){
							self._distributeShargeCharge(chid, charge);
						}
						else{
							self.charges({id:chid, customer_id: cid, sharedCharge:false}).remove();
							self._distributeShargeCharge(chid, charge);
						}
					}, 500);
				}
				,updateSharedChargeCharge: function(chid, $event){
					var $input = $($event.target)
						val = $input.val();
					this._distributeShargeCharge(chid, val);
					
				}
				,_distributeShargeCharge: function(chid, val){
					var customers = this.charges({id:chid, sharedCharge: true}).get()[0].sharedCustomers
						,dividedCharge = val/customers.length
						,dividedCharge = this._round(dividedCharge,2)
						,self = this
						,name = this.charges({id:chid, sharedCharge: true}).get()[0].name;
						
					_.each(customers, function(index){
						if(self.charges({id:chid, sharedCharge:false, customer_id:index}).get().length ===0){
		
							self.charges.insert({id:chid, customer_id: index, charge:dividedCharge +"", sharedCharge:false, sharedCustomer:[], noEdit:true, name:name});
						} else {
							self.charges({id:chid, customer_id:index, sharedCharge:false}).update({charge: dividedCharge + "", name:name});
							
						};
						
					});
				}
				,_round: function(value, exp) {
				  if (typeof exp === 'undefined' || +exp === 0)
					return Math.round(value);
					
					  value = +value;
					  exp  = +exp;
					
					  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
						return NaN;
					
					  // Shift
					  value = value.toString().split('e');
					  value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));
					
					  // Shift back
					  value = value.toString().split('e');
					  return +(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
				}
				,deleteCharge: function(chid, cid){
					this.charges({id:chid, customer_id:cid }).remove();
				}
				,deleteSharedCharge: function(chid){
					this.charges({id:chid}).remove();
				}
				
				,addCustomer: function(){
					var lastIn =  this.customers().last().id +1;
					if(isNaN(lastIn)){
						lastIn = 0;	
					}
					
					var j = this.customers.insert({id:lastIn, name:'Click to Enter a Name'}).get();
					this.addCharge(j[0].id, '0');
				}
				
				,removeCustomer: function(cid){
					var self = this;
					this.customers({id:cid}).remove();
					this.charges({customer_id:cid}).remove();
					var arr = this.charges({sharedCharge:true}).get();
					this.charges({sharedCharge:true}).each(function(record,recordnumber){
							// Find and remove item from an array
							var i = record.sharedCustomers.indexOf(cid);
							if(i != -1) {
								record.sharedCustomers.splice(i, 1);
							}
						self._distributeShargeCharge(record.id, record.charge);
						//end of each
					});
					
					
				}
				,getSum: function(cid/*customerID*/){
					var total = 0;
					this.charges({customer_id: cid}).each(function(record,recordnumber){
						total += +record.charge;
						//end of each
					});
					
					
					return total;
				}
				,getSumWithTip:function(cid){
					var total = 0;
					this.charges({customer_id: cid}).each(function(record,recordnumber){
						total += +record.charge;
						//end of each
					});
					
					return total += this.getTip(cid);
				}
				
				,getSumWithTax:function(cid){
					var total = 0;
					this.charges({customer_id: cid}).each(function(record,recordnumber){
						total += +record.charge;
						//end of each
					});
					
					return total += this.getTax(cid);
				}
				
				,getSumWithTaxandTip:function(cid){
					var total = 0;
					this.charges({customer_id: cid}).each(function(record,recordnumber){
						total += +record.charge;
						//end of each
					});
					
					total += this.getTax(cid);
					var tip = this.tipPercentage/100
						,temp = total * tip;
					
					return total+= temp;
				}
				
				,returnCost:function(cid){
					if(this.includeTip && !this.includeTax){
						return this.getSumWithTip(cid);
					}
					else if(!this.includeTip && this.includeTax) {
						return this.getSumWithTax(cid);
					}
					else if(this.includeTip && this.includeTax){
						
						return this.getSumWithTaxandTip(cid);
					} else{
						
						return this.getSum(cid);
					}
					
				}
				
				,getTip: function(cid/*customerID*/){
					var total = 0
						,tip = this.tipPercentage/100;
					this.charges({customer_id: cid}).each(function(record,recordnumber){
						total += +record.charge;
						//end of each
					});
					
					if(this.includeTax){
						var tax =  this.taxPercentage/100
						tax = total * tax;
						total += tax;
							
					}
					
					var temp = total * tip;
					
						
						return temp;
					//end of get tip
				}
				,getTax: function(cid/*customerID*/){
					var total= 0
						,tax = this.taxPercentage/100;
					this.charges({customer_id: cid}).each(function(record,recordnumber){
						total += +record.charge;
						//end of each
					});
					var temp = total * tax;
						return temp;
					//end of get tip
				}
				,checkAll:function(chid){
					var id = this.customers().select('id')
						,ch = this.charges({id:chid, sharedCharge: true}).get();
					
					ch[0].sharedCustomers = angular.copy(id);
					this._distributeShargeCharge(chid, ch[0].charge);
					
				}
				,unCheckAll: function(chid){
					var ch = this.charges({id:chid, sharedCharge: true}).get()
					ch[0].sharedCustomers.length = 0;
					this.charges({id:chid, sharedCharge:false}).remove();
					//this._distributeShargeCharge(chid, ch[0].charge);
				}
				,taxPercentage: 6
				,tipPercentage: 15
				,includeTip:false
				,includeTax: false
				,chargeID:1

				//end of returned object
			};
		
	});

//end of SIF	
})(angular, jQuery, _);