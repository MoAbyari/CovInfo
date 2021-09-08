const mo = [
   {    
    date: "2021-09-07",
    lga_name: "Albury (C)",
    total_cases: 11,
    lga_code: "10050",
    active_cases: 0
   },
   {
    date: "2021-09-07",
    lga_name: "Armidale Regional (A)",
    total_cases: 9,
    lga_code: "10130",
    active_cases: 0
    },
   {    
    date: "2021-09-07",
    lga_name: "Albury (C)",
    total_cases: 11,
    lga_code: "10050",
    active_cases: 0
   },
   {
    date: "2021-09-07",
    lga_name: "Armidale Regional (A)",
    total_cases: 9,
    lga_code: "10130",
    active_cases: 0
    }

]

const code = [
  {
    AREASQKM19: 305.9459,
    LGA_CODE19: "10050",
    LGA_NAME19: "Albury (C)",
    STE_CODE16: "1",
    STE_NAME16: "New South Wales"

  },

  {
    AREASQKM19: 8620.699,
    LGA_CODE19: "10130",
    LGA_NAME19: "Armidale Regional (A)",
    STE_CODE16: "1",
    STE_NAME16: "New South Wales"

  },
  {
    AREASQKM19: 305.9459,
    LGA_CODE19: "10050",
    LGA_NAME19: "Albury (C)",
    STE_CODE16: "1",
    STE_NAME16: "New South Wales"

  },

  {
    AREASQKM19: 8620.699,
    LGA_CODE19: "10130",
    LGA_NAME19: "Armidale Regional (A)",
    STE_CODE16: "1",
    STE_NAME16: "New South Wales"

  }

]

// code.filter ((s) => {
//     s.LGA_CODE19 === 
// })



let result = mo.filter(function (o1) {
    return code.some(function (o2) {
        if (o1.lga_code === o2.LGA_CODE19){
            console.log(o1.total_cases); 
        } ;
    });
});

let result = mo.filter(function (o1) {
    return code.some(function (o2) {
        return o1.lga_code === o2.LGA_CODE19;
    });
});

