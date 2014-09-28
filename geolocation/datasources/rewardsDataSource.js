define([],function(){
       return function(){
    var cardsNumber;
           
           var rewardsModel={
               id:'Id',
               fields:{
               createdAt:
               {
               feild:'CreatedAt'
               defaultValue:new date()
           },
           cardNumber:{
               feild:'CardNumber'
               defaultvalue:''
           }  ,         
           
           expiryDate:
           {
               feild:'ExpiryDate'
               defaultValue:new date()
           },
           rewardType:{
               feild:'RewardType'
               defaultValue:'Gold'
           },
           rewards:
           {
               feild:'Rewards'
               defaultValue:'Free Coffee everyday'
           }
           
           }
           }
};
       
       var rewards=new kendo.data.DataSource({
       Type:'Everlive',
       Schema:
       {Model:'rewardsModel'},
       Transport:
       {TypeName:'rewards'},
       sort: 
       { 
                field: 'CreatedAt',
                dir: 'desc'
            
        }
       });
       return rewards;
       });