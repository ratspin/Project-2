//คำนวณหาค่าความคล้ายคลึงของ user กับ อาหารแต่ละเมนู
var similar_score  = function(x,y){ 
    var sum = [];
    var tmp = [];
    var W1 = 5
    var W2 = 1
    var W3 = 1
    
        for(var key in y)   sum.push(Math.pow((y[key] - x[key]),2))
     
        for(var i1 = 1  ; i1 <= 4  ; i1 ++ )        tmp.push(sum[i1]*W1)
        for(var i2 = 5  ; i2 <= 11 ; i2 ++ )        tmp.push(sum[i2]*W2)
        for(var i3 = 12 ; i3 <= 31 ; i3 ++ )        tmp.push(sum[i3]*W3)
         
        var sum_all = 0
        for(var i4 = 0 ; i4 < tmp.length ; i4++ )  sum_all += tmp[i4];
        var euclid = Math.sqrt(sum_all)
        var similar = 1 / (1 + euclid )

        return similar;
    }



var similar_sort  = function(user,food,similar_score,num_food){ 
    var similar_all  = [];//เก็บค่าความคล้ายคลึงแต่ละค่าที่คำนวณจากฟังก์ชัน similar_score เก็บค่าไว้ใน similar_all
    for(var i = 0 ; i < food.length ; i ++ ){
            var score = similar_score(user[0],food[i])
            var food_name = food[i]["อาหาร"]
            similar_all.push({similar_rate : score , food : food_name });
        }
    //เรียงลำดับค่าความคล้ายคลึงแต่ละเมนูอาหาร โดยเรียงจากมากไปน้อย
    similar_all.sort(function(a,b){ 
        return b.similar_rate < a.similar_rate ? -1 : b.similar_rate > a.similar_rate ? 1 : b.similar_rate >= a.similar_rate ? 0 : NaN;
    });

    //เก็บค่าค่าความคล้ายคลึงแต่ละเมนูอาหาร โดยมีจำนวนที่เก็บเท่ากับ num_food
    var scores = [] ;
    for(var i5 = 0 ; i5 < num_food ; i5++ ){
        scores.push(similar_all[i5]);
    }

    return scores ;
}

//คำนวณหาค่าน้ำหนักของแต่ละเกณฑ์
var Weight  = function(jsn){ 
    var MaxC1 = {} //ค่าสูงสุดของเกณฑ์ที่ 1 (โรค)
    var MaxC2 = {} //ค่าสูงสุดของเกณฑ์ที่ 2 (อาหารที่แพ้)
    var MaxC3 = {} //ค่าสูงสุดของเกณฑ์ที่ 3 (เนื้อสัตว์ที่ชอบ)
    // var test = []  //
    for(var i = 0 ; i < jsn.length ; i ++ ){
        //หาค่า rateing สูงสุดของแต่ละเกณฑ์
        MaxC1[i] = Math.max(jsn[i]["โรคหัวใจ"],jsn[i]["โรคเบาหวาน"],jsn[i]["โรคไต"],jsn[i]["โรคความดันโลหิตสูง"])
        MaxC2[i] = Math.max(jsn[i]["หมู"],jsn[i]["ไก่"],jsn[i]["ปลา"],jsn[i]["กุ้ง"],jsn[i]["หมึก"],jsn[i]["วัว"],jsn[i]["ไข่"])   
        MaxC3[i] = Math.max(jsn[i]["คะน้า"],jsn[i]["เห็ด"],jsn[i]["ผักกาด"],jsn[i]["มะเขือ"],jsn[i]["ขิง"],
                            jsn[i]["ฟัก"],jsn[i]["เม็ดมะม่วงหิมพานต์"],jsn[i]["บวบ"],jsn[i]["หน่อไม้"],jsn[i]["ตำลึง"],
                            jsn[i]["ชะอม"],jsn[i]["กะหล่ำปลี"],jsn[i]["ถั่วงอก"],jsn[i]["ผักบุ้ง"],jsn[i]["ไชโป้ว"],
                            jsn[i]["บรอกโคลี"],jsn[i]["สะตอ"],jsn[i]["กะเพรา"],jsn[i]["ฝักทอง"],jsn[i]["ผักกระเฉด"]) 
        
        //คำนวณหาค่าน้ำาหนักของแต่ละเกณฑ์
        var Wc1 = MaxC1[i] / (MaxC1[i] + MaxC2[i] + MaxC3[i])
        var Wc2 = MaxC2[i] / (MaxC1[i] + MaxC2[i] + MaxC3[i])
        var Wc3 = MaxC3[i] / (MaxC1[i] + MaxC2[i] + MaxC3[i])

        // test.push({Wc1,Wc2,Wc3});  //

        //นำค่าน้ำหนักที่ได้ไปคูณกับค่า rateing ของแต่ละ item
        jsn[i]["โรคหัวใจ"] *= Wc1 
        jsn[i]["โรคเบาหวาน"] *= Wc1 
        jsn[i]["โรคไต"] *= Wc1 
        jsn[i]["โรคความดันโลหิตสูง"] *= Wc1 

        jsn[i]["หมู"] *= Wc2 
        jsn[i]["ไก่"] *= Wc2 
        jsn[i]["ปลา"] *= Wc2 
        jsn[i]["กุ้ง"] *= Wc2 
        jsn[i]["หมึก"] *= Wc2
        jsn[i]["วัว"] *= Wc2
        jsn[i]["ไข่"] *= Wc2

        jsn[i]["คะน้า"] *= Wc3
        jsn[i]["เห็ด"] *= Wc3
        jsn[i]["ผักกาด"] *= Wc3
        jsn[i]["มะเขือ"] *= Wc3
        jsn[i]["ขิง"] *= Wc3
        jsn[i]["ฟัก"] *= Wc3
        jsn[i]["เม็ดมะม่วงหิมพานต์"] *= Wc3
        jsn[i]["บวบ"] *= Wc3
        jsn[i]["หน่อไม้"] *= Wc3
        jsn[i]["ตำลึง"] *= Wc3
        jsn[i]["ชะอม"] *= Wc3
        jsn[i]["กะหล่ำปลี"] *= Wc3
        jsn[i]["ถั่วงอก"] *= Wc3
        jsn[i]["ผักบุ้ง"] *= Wc3
        jsn[i]["ไชโป้ว"] *= Wc3
        jsn[i]["บรอกโคลี"] *= Wc3
        jsn[i]["สะตอ"] *= Wc3
        jsn[i]["กะเพรา"] *= Wc3
        jsn[i]["ฝักทอง"] *= Wc3
        jsn[i]["ผักกระเฉด"] *= Wc3

    }
    return jsn;
    // return test;  //
}



module.exports={
    similar_score:similar_score,
    similar_sort:similar_sort,
    Weight:Weight
}


