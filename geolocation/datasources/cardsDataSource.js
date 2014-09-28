define([],function(){
       return function(sort,filter){
    var cardsModel={
        id:='Id'
        fields:{
        createdAt:{
        feild:'CreatedAt'
        defaultValue: new date()
    },
    cardNumber:{
        feild:'CardNumber'
        defaultValue:''
    },
    expiryDate:{
        feild:'ExpiryDate'
        defaultValue:new date()
    }
    }
    };

       var cards=new kendo.data.DataSource({
       type:'everlive',
       Schema:
       {
       Model:'cardsModel'
       },
       Transport:
       {
       TypeName:'Cards'
       },
       sort:
       {
       feild:'createdAt'
       desc='dir'
       }
       });

$ subscribe('/newCards/add',function(e){
   cards.fetch();
    });

return cards;
}
       });