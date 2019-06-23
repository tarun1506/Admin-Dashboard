$(function(){
    $("#home").on('click', function(){
        $.get( "/", function(  ) {
             });
    });

    $("#fetchdata").on('click', function(){
        $.get( "/fetchdata", function( data ) {
            var products = data['data'];
            $("#trdata").html('');
            $("#message").hide();
            var string = '';
            $.each(products, function(index, product ) {

                string += '<tr><td>'+product['customer_no']+'</td><td>'+product['date']+'</td><td>'+product['time_in1']+'</td><td>'+product['time_out1']+'</td><td>'+product['age_group1']+'</td><td>'+product['gender1']+'</td><td>'+product['time_in2']+'</td><td>'+product['age_group2']+'</td><td>'+product['gender2']+'</td></tr>';
            });

            $("#trdata").html(string);
        });
    });

    $("#query1_store1").on('click', function(){
        $.get( "/query1_store1", function( data ) {
            var products = data['data'];
            $("#trdata").html('');
            $("#message").hide();
            var string = '';
            var string1 ='';
            $.each(products, function(index,product) {
                string +='<tr><td>'+index+'</td><td>'+product['customer_no']+'</td><td>'+product['date']+'</td><td>'+product['time_in1']+'</td><td>'+product['time_out1']+'</td><td>'+product['age_group1']+'</td><td>'+product['gender1']+'</td></tr>';
                string1 ='<tr><td> Number of female customers in store 1 having age less than 35 : '+index+'</td></tr>'});
            $("#trdata").html(string1+string);

        
         });
    });

    $("#query1_store2").on('click', function(){
        $.get( "/query1_store2", function( data ) {
            var products = data['data'];
            $("#trdata").html('');
            $("#message").hide();
            var string = '';
            var string1 ='';
            $.each(products, function(index,product) {
                string +='<tr><td>'+index+'</td><td>'+product['customer_no']+'</td><td>'+product['date']+'</td><td>'+product['time_in2']+'</td><td>'+product['time_out2']+'</td><td>'+product['age_group2']+'</td><td>'+product['gender2']+'</td></tr>';
                string1 ='<tr><td> Number of female customers in store 2 having age less than 35 : '+index+'</td></tr>'});
            $("#trdata").html(string1+string);

        
         });
    });

    $("#query2_store1").on('click', function(){
        $.get( "/query2_store1", function( data ) {
            var products = data['data'];
            $("#trdata").html('');
            $("#message").hide();
            var string = '';
            var string1 ='';
            $.each(products, function(index,product) {
                string +='<tr><td>'+index+'</td><td>'+product['customer_no']+'</td><td>'+product['date']+'</td><td>'+product['time_in1']+'</td><td>'+product['time_out1']+'</td><td>'+product['age_group1']+'</td><td>'+product['gender1']+'</td></tr>';
                string1 ='<tr><td> Number of male customers in store 1 : '+index+'</td></tr>'});
            $("#trdata").html(string1+string);

        
         });
    });

    $("#query2_store2").on('click', function(){
        $.get( "/query2_store2", function( data ) {
            var products = data['data'];
            $("#trdata").html('');
            $("#message").hide();
            var string = '';
            var string1 ='';
            $.each(products, function(index,product) {
                string +='<tr><td>'+index+'</td><td>'+product['customer_no']+'</td><td>'+product['date']+'</td><td>'+product['time_in2']+'</td><td>'+product['time_out2']+'</td><td>'+product['age_group2']+'</td><td>'+product['gender2']+'</td></tr>';
                string1 ='<tr><td> Number of male customers in store 2  : '+index+'</td></tr>'});
            $("#trdata").html(string1+string);

        
         });
    });

    $("#query3_millennial1").on('click', function(){
        $.get( "/query3_millennial1", function( data ) {
            var products = data['data'];
            $("#trdata").html('');
            $("#message").hide();
            var string = '';
            var string1 ='';
            $.each(products, function(index,product) {
                string +='<tr><td>'+index+'</td><td>'+product['customer_no']+'</td><td>'+product['date']+'</td><td>'+product['time_in1']+'</td><td>'+product['time_out1']+'</td><td>'+product['age_group1']+'</td><td>'+product['gender1']+'</td></tr>';
                string1 ='<tr><td> Number of customers in store1 of age Millenniall : '+index+'</td></tr>'});
            $("#trdata").html(string1+string);

        
         });
    });

    $("#query3_generationz1").on('click', function(){
        $.get( "/query3_generationz1", function( data ) {
            var products = data['data'];
            $("#trdata").html('');
            $("#message").hide();
            var string = '';
            var string1 ='';
            $.each(products, function(index,product) {
                string +='<tr><td>'+index+'</td><td>'+product['customer_no']+'</td><td>'+product['date']+'</td><td>'+product['time_in1']+'</td><td>'+product['time_out1']+'</td><td>'+product['age_group1']+'</td><td>'+product['gender1']+'</td></tr>';
                string1 ='<tr><td> Number of customers in store1 of age Generationz : '+index+'</td></tr>'});
            $("#trdata").html(string1+string);

        
         });
    });

    $("#query3_millennial2").on('click', function(){
        $.get( "/query3_millennial2", function( data ) {
            var products = data['data'];
            $("#trdata").html('');
            $("#message").hide();
            var string = '';
            var string1 ='';
            $.each(products, function(index,product) {
                string +='<tr><td>'+index+'</td><td>'+product['customer_no']+'</td><td>'+product['date']+'</td><td>'+product['time_in2']+'</td><td>'+product['time_out2']+'</td><td>'+product['age_group2']+'</td><td>'+product['gender2']+'</td></tr>';
                string1 ='<tr><td> Number of customers in store 2 having age of Millenniall : '+index+'</td></tr>'});
            $("#trdata").html(string1+string);

        
         });
    });

    $("#query3_generationz2").on('click', function(){
        $.get( "/query3_generationz2", function( data ) {
            var products = data['data'];
            $("#trdata").html('');
            $("#message").hide();
            var string = '';
            var string1 ='';
            $.each(products, function(index,product) {
                string +='<tr><td>'+index+'</td><td>'+product['customer_no']+'</td><td>'+product['date']+'</td><td>'+product['time_in2']+'</td><td>'+product['time_out2']+'</td><td>'+product['age_group2']+'</td><td>'+product['gender2']+'</td></tr>';
                string1 ='<tr><td> Number of customers in store 2 having age of Generationz : '+index+'</td></tr>'});
            $("#trdata").html(string1+string);

        
         });
    });





 
    $("#importdata").on('click', function(){
        $.get( "/import", function( data ) {
            $("#message").show().html(data['success']);
        });
    });

}); 