
    

    function newYear_time(){ 
         var time_start = new Date().getTime();  //5.30         //设定当前时间
         var time_end =  new Date("2019/02/04 23:59:59").getTime();    //设定目标时间

        // 计算时间差 
        var time_distance = time_end - time_start; 
        //console.log(time_distance)
        // 天
        var int_day = Math.floor(time_distance/86400000) 
        time_distance -= int_day * 86400000; 
        // 时
        var int_hour = Math.floor(time_distance/3600000) 
        time_distance -= int_hour * 3600000; 
        // 分
        var int_minute = Math.floor(time_distance/60000) 
        time_distance -= int_minute * 60000; 
        // 秒 
        var int_second = Math.floor(time_distance/1000) 
        // 时分秒为单数时、前面加零 
        if(int_day < 10){ 
            int_day = "0" + int_day; 
        } 
        if(int_hour < 10){ 
            int_hour = "0" + int_hour; 
        } 
        if(int_minute < 10){ 
            int_minute = "0" + int_minute; 
        } 
        if(int_second < 10){
            int_second = "0" + int_second; 
        } 

        
        int_day = parseInt(int_day);
        int_hour = parseInt(int_hour);
        int_minute = parseInt(int_minute);
        int_second = parseInt(int_second);
       
        int_day_shi = parseInt(int_day/10);
        int_day_ge = int_day%10;
       
        int_hour_shi = parseInt(int_hour/10);
        int_hour_ge = int_hour%10;

        

        int_minute_shi = parseInt(int_minute/10);
        int_minute_ge = int_minute%10;

        int_second_shi = parseInt(int_second/10);
        int_second_ge = int_second%10;

      
        $('.content_1 .int_day_shi').html(int_day_shi);
        $('.content_1 .int_day_ge').html(int_day_ge);

        $('.content_1 .int_hour_shi').html(int_hour_shi);
        $('.content_1 .int_hour_ge').html(int_hour_ge);

        $('.content_1 .int_minute_shi').html(int_minute_shi);
        $('.content_1 .int_minute_ge').html(int_minute_ge);

        $('.content_1 .int_second_shi').html(int_second_shi);
        $('.content_1 .int_second_ge').html(int_second_ge);


        // 设置定时器
        setTimeout("newYear_time()",1000)
    }

    function openClass_time(){ 
         var time_start = new Date().getTime();  //5.30         //设定当前时间
         var time_end =  new Date("2019/02/21 23:59:59").getTime();    //设定目标时间

        // 计算时间差 
        var time_distance = time_end - time_start; 
        //console.log(time_distance)
        // 天
        var int_day = Math.floor(time_distance/86400000) 
        time_distance -= int_day * 86400000; 
        // 时
        var int_hour = Math.floor(time_distance/3600000) 
        time_distance -= int_hour * 3600000; 
        // 分
        var int_minute = Math.floor(time_distance/60000) 
        time_distance -= int_minute * 60000; 
        // 秒 
        var int_second = Math.floor(time_distance/1000) 
        // 时分秒为单数时、前面加零 
        if(int_day < 10){ 
            int_day = "0" + int_day; 
        } 
        if(int_hour < 10){ 
            int_hour = "0" + int_hour; 
        } 
        if(int_minute < 10){ 
            int_minute = "0" + int_minute; 
        } 
        if(int_second < 10){
            int_second = "0" + int_second; 
        } 

        
        int_day = parseInt(int_day);
        int_hour = parseInt(int_hour);
        int_minute = parseInt(int_minute);
        int_second = parseInt(int_second);
       
        int_day_shi = parseInt(int_day/10);
        int_day_ge = int_day%10;
       
        int_hour_shi = parseInt(int_hour/10);
        int_hour_ge = int_hour%10;

        

        int_minute_shi = parseInt(int_minute/10);
        int_minute_ge = int_minute%10;

        int_second_shi = parseInt(int_second/10);
        int_second_ge = int_second%10;

      
        $('.content_2 .int_day_shi').html(int_day_shi);
        $('.content_2 .int_day_ge').html(int_day_ge);

        $('.content_2 .int_hour_shi').html(int_hour_shi);
        $('.content_2 .int_hour_ge').html(int_hour_ge);

        $('.content_2 .int_minute_shi').html(int_minute_shi);
        $('.content_2 .int_minute_ge').html(int_minute_ge);

        $('.content_2 .int_second_shi').html(int_second_shi);
        $('.content_2 .int_second_ge').html(int_second_ge);


        // 设置定时器
        setTimeout("openClass_time()",1000)
    }

 

   function shengyu_time(){ 
        //当前时间戳
        var time_now = new Date().getTime();   
        // //今年的起点
        var flag = new Date("2018/02/16 00:00:00").getTime();//新年开始时间.
        var target = new Date("2019/02/05 00:00:00").getTime();
        /**
         * 
    
        （当前时间戳-20180216时间戳）/（20190205时间戳-20180216时间戳）


         */
        var baifenbi_time = 1 - (time_now - flag) / (target - flag) * 100;
       
		
        baifenbi_time = baifenbi_time.toString();
        baifenbi_time = baifenbi_time.substring(0,baifenbi_time.indexOf(".")+8);
        baifenbi_time = +baifenbi_time;
        
        $('.baifenbi_time').html("0.021102");
        setTimeout("shengyu_time()",1000)
    }
