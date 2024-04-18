// Lập trình đồng bộ:
// + Các công việc được thực hiện 1 cách đồng bộ, xong công việc này thì đến công việc tiếp theo

// Lập trình bất đồng bộ
//+ Các công việc được thực hiện cùng 1 lúc
//+ Mặc định của js là bất đồng bộ


// Callback function: là 1 hàm sẽ được thực hiện sau khi hàm khác thực hiện xong
//+ Giúp công việc thực hiện 1 cách tuần tự

// Mô tả về hoạt đồng hằng ngày
// 1. Làm bài tập (3s)
// 2. Đá bóng (4s)
// 3. Nấu cơm (5s)

const work1 = (name, callback) =>{
    console.log("bat dau thuc hien cac cong viec");
    console.log("thuc hien cong viec "+name);


    setTimeout(() => {
        callback();
    }, 3000);                      //hàm setTimeout giúp set time giữa công việc 1 và 2
}

const work2 = (name, callback) =>{
    console.log("thuc hien cong viec "+name);


    setTimeout(() => {
        callback();
    }, 4000);                //set time giua cv 2 va 3
}

const work3 = (name, callback) =>{
    console.log("thuc hien cong viec "+name);


    setTimeout(() => {
        callback();
    },5000 );
}


// work1("lam bai tap", () => {
//  work2("da bong", () => {
//     work3("nau com")
//  });
// });


// Promise - hứa
//+ được sử dụng cho tính toán bất đồng bộ
//+ 1 promise đại diện cho 1 tiến trình hay 1 tác vụ chưa thể hoàn thành ngay được
//+ trả về giá trị khi hoàn thành(resolve) hoặc không(reject)
//+ tránh tình trạng callback hell hay pyramid of doom (dùng callback lồng nhau quá nhiều)


let money = 35;

// Khoi tao loi hua
let buyIphone = new Promise((resolve, reject) => {
    if(money >= 35){
        resolve("mua iphone");
    }else{
        reject("kiem them tien di");
    }
})

// Khoi tao loi hua 2
let buyWatch = new Promise((resolve, reject) => {
    if(money - 35 >= 4){
        resolve("mua apple watch");
    }else{
        reject("khong du tien dau");
    }
})

// Thuc thi loi hua co 3 loai ham:
//+ then: day la cac ham khi thuc hien duoc loi hua
//+ catch: duoc goi khi that hua
//+ finally: luon duoc goi sau cung cua 1 tien trinh xu ly promise (nghia la khong quan tam truoc do promise co thuc hien dc loi hua hay k)

buyIphone
.then((response) => {
    console.log(response);


    // mua apple watch
    return buyWatch;
})
.then((res) => {
    console.log(res);
})


.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("di ve nha")
})

