// //คำนวณหาค่าความคล้ายคลึงของ user กับ อาหารแต่ละเมนู
var Similar_score  = function(x,y){ 
    var sum = [];
    var tmp = [];

    for(var key in y)   sum.push(Math.pow((y[key] - x[key]),2))
    for(var i = 4  ; i < 33  ; i ++ )        tmp.push(sum[i]) 
    var sum_all = 0
    for(var i4 = 0 ; i4 < tmp.length ; i4++ )  sum_all += tmp[i4];
    var euclid = Math.sqrt(sum_all)
    var similar = 1 / (1 + euclid )
    return similar;
    }



var Similar_sort  = function(user,food,similar_score,num_food){ 
    var similar_all  = [];
    for(var i = 0 ; i < food.length ; i ++ ){
            similar_all.push({  similar_rate : similar_score(user[0],food[i]) , 
                                food : food[i]["อาหาร"] ,
                                การปรุง : food[i]["การปรุง"] ,
                                มื้อเช้า : food[i]["มื้อเช้า"] ,
                                // โรค : food[i]["โรค"]
                            });                       
        }

    similar_all.sort(function(a,b){ 
        return b.similar_rate < a.similar_rate ? -1 : b.similar_rate > a.similar_rate ? 1 : b.similar_rate >= a.similar_rate ? 0 : NaN;
    });


    var scores = [] ;
    for(var i5 = 0 ; i5 < num_food ; i5++ ){
        scores.push(similar_all[i5]);
    }

    return scores;
}

//คำนวณหาค่าน้ำหนักของแต่ละเกณฑ์
var Weights  = function(jsn){ 
    var MaxC1 = {} //ค่าสูงสุดของเกณฑ์ที่ 1 (เนื้อสัตว์)
    var MaxC2 = {} //ค่าสูงสุดของเกณฑ์ที่ 2 (ผัก)


    for(var i = 0 ; i < jsn.length ; i ++ ){
        //หาค่า rateing สูงสุดของแต่ละเกณฑ์
        MaxC1[i] = Math.max(jsn[i].ไก่,jsn[i].กุ้ง,jsn[i].ไข่,jsn[i].เนื้อวัว,jsn[i].ปลา,jsn[i].หมึก,jsn[i].หมู)   
        MaxC2[i] = Math.max(jsn[i].กวางตุ้ง,jsn[i].กะหล่ำปลี,jsn[i].ข้าวโพดอ่อน,jsn[i].ขิง,jsn[i].คะน้า,
                            jsn[i].แครอท,jsn[i].บรอกโคลี,jsn[i].บวบ,jsn[i].ปวยเล้ง,jsn[i].ผักกาด,
                            jsn[i].ผักโขม,jsn[i].ผักบุ้ง,jsn[i].ฟัก,jsn[i].ฟักทอง,jsn[i].พริก,
                            jsn[i].พริก,jsn[i].มะเขือ,jsn[i].มะเขือเทศ,jsn[i].มะระ,jsn[i].มะละกอ,
                            jsn[i].เม็ดมะม่วงหิมพานต์,jsn[i].หน่อไม้ฝรั่ง,jsn[i].เห็ด
                            )

        
        //คำนวณหาค่าน้ำาหนักของแต่ละเกณฑ์
        var Wc1 = MaxC1[i] / (MaxC1[i] + MaxC2[i] )
        var Wc2 = MaxC2[i] / (MaxC1[i] + MaxC2[i] )


        //นำค่าน้ำหนักที่ได้ไปคูณกับค่า rateing ของแต่ละ item

        jsn[i].กุ้ง *= Wc1 
        jsn[i].ไก่ *= Wc1
        jsn[i].ไข่ *= Wc1
        jsn[i].เนื้อวัว *= Wc1
        jsn[i].ปลา *= Wc1
        jsn[i].หมึก *= Wc1
        jsn[i].หมู *= Wc1 
        
        jsn[i].กวางตุ้ง *= Wc2
        jsn[i].กะหล่ำปลี *= Wc2
        jsn[i].ข้าวโพดอ่อน *= Wc2
        jsn[i].ขิง *= Wc2
        jsn[i].คะน้า *= Wc2
        jsn[i].แครอท *= Wc2
        jsn[i].บรอกโคลี *= Wc2
        jsn[i].บวบ *= Wc2
        jsn[i].ปวยเล้ง *= Wc2
        jsn[i].ผักกาด *= Wc2
        jsn[i].ผักโขม *= Wc2
        jsn[i].ผักบุ้ง *= Wc2
        jsn[i].ฟัก *= Wc2
        jsn[i].ฟักทอง *= Wc2
        jsn[i].พริก *= Wc2
        jsn[i].พริกหวาน *= Wc2
        jsn[i].มะเขือ *= Wc2
        jsn[i].มะเขือเทศ *= Wc2
        jsn[i].มะระ *= Wc2
        jsn[i].มะละกอ *= Wc2
        jsn[i].เม็ดมะม่วงหิมพานต์ *= Wc2
        jsn[i].หน่อไม้ฝรั่ง *= Wc2
        jsn[i].เห็ด *= Wc2
    }
    return  jsn;
}

var Fillters  = function(disease,food){ 
    var tmp = []
    for(var i = 0; i < food.length; i++){
        if(disease === food[i].โรคA)  tmp.push(food[i]);
        // {tmp.push(food[i]); tmp[i].โรค  = "A"  }   
        if(disease === food[i].โรคB) tmp.push(food[i]);
        //  {tmp.push(food[i]); tmp[i].โรค  = "B"  }   
        if(disease === food[i].โรคC) tmp.push(food[i]);
        //  {tmp.push(food[i]); tmp[i].โรค  = "C"  }          
        if(disease === food[i].โรคD) tmp.push(food[i]);
        //  {tmp.push(food[i]); tmp[i].โรค  = "D"  }   
        if(disease === food[i].โรคAB) tmp.push(food[i]);
        // {tmp.push(food[i]); tmp[i].โรค  = "AB"  }   
        if(disease === food[i].โรคAC) tmp.push(food[i]);
        // {tmp.push(food[i]); tmp[i].โรค  = "AC"  }   
        if(disease === food[i].โรคAD) tmp.push(food[i]);
        // {tmp.push(food[i]); tmp[i].โรค  = "AD"  }   
        if(disease === food[i].โรคBC) tmp.push(food[i]);
        //  {tmp.push(food[i]); tmp[i].โรค  = "BC"  }   
        if(disease === food[i].โรคBD) tmp.push(food[i]);
        //  {tmp.push(food[i]); tmp[i].โรค  = "BD"  }   
        if(disease === food[i].โรคCD) tmp.push(food[i]);
        //  {tmp.push(food[i]); tmp[i].โรค  = "CD"  }   
        if(disease === food[i].โรคABC) tmp.push(food[i]);
        //  {tmp.push(food[i]); tmp[i].โรค  = "ABC"  }   
        if(disease === food[i].โรคABD) tmp.push(food[i]);
        // {tmp.push(food[i]); tmp[i].โรค  = "ABD"  }   
        if(disease === food[i].โรคACD) tmp.push(food[i]);
        //  {tmp.push(food[i]); tmp[i].โรค  = "ACD"  }   
        if(disease === food[i].โรคBCD)  tmp.push(food[i]);
        //   {tmp.push(food[i]); tmp[i].โรค  = "BCD"  }   
        if(disease === food[i].โรคABCD) tmp.push(food[i]);
        //   {tmp.push(food[i]); tmp[i].โรค  = "ABCD"  }   
    }
    return tmp;
}



module.exports={
    Fillters,
    Similar_sort,
    Weights,
    Similar_score
}


