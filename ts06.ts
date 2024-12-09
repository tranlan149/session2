

//bai 6
type storeItem={
  id:number;
  name: string;
  count:number;
}
type cartItem={
  id:number;
  name: String;
  count: number;
}
let stores:storeItem[] = [
    { id: 1, name: "Milk", count: 100 }, 
    { id: 2, name: "Yakult", count: 100 },
    { id: 3, name: "Butter", count: 100 }
  ];
  
  let carts:cartItem[] = [];
  
  function displayStoresAndCarts():void {
    console.log("Stores:");
    for (let i = 0; i < stores.length; i++) {
      console.log(`ID: ${stores[i].id}, Name: ${stores[i].name}, Count: ${stores[i].count}`);
    }
    
    console.log("\nCarts:");
    for (let i = 0; i < carts.length; i++) {
      console.log(`Name: ${carts[i].name}, Quantity: ${carts[i].count}`);
    }
  }
  
  // Sử dụng vòng lặp for để thực hiện các hành động cho đến khi người dùng nhập 'E'
  for (let action; action !== 'E';) {
    // Hỏi người dùng nhập vào một trong các lựa chọn
    action = prompt("Nhập một chữ cái (C/R/U/D/E):");
  
    if (action === "C") {
      // C: Cho người dùng nhập vào tên sản phẩm muốn mua
      let productName = String(prompt("Nhập tên sản phẩm bạn muốn mua:"));
      let product = stores.find(item => item.name.toLowerCase() === productName.toLowerCase());
      
      if (product && product.count > 0) {
        carts.push({ name: product.name, count: 1 });
        product.count--;
        console.log(`${product.name} đã được thêm vào giỏ hàng!`);
      } else {
        console.log("Sản phẩm không có sẵn hoặc hết hàng.");
      }
  
    } else if (action === "R") {
      // R: In ra toàn bộ các sản phẩm trong stores và carts
      displayStoresAndCarts();
  
    } else if (action === "U") {
      // U: Hỏi người dùng vị trí update trong carts
      let index = Number(prompt("Nhập vị trí sản phẩm muốn cập nhật trong giỏ hàng (bắt đầu từ 0):"));
      if (index >= 0 && index < carts.length) {
        let newCount = Number(prompt("Nhập số lượng muốn thay đổi:"));
        let productName = carts[index].name;
        let storeProduct = stores.find(item => item.name === productName);
        
        if (storeProduct) {
          // Cập nhật số lượng trong giỏ hàng và stores
          let diff = newCount - carts[index].count;
          if (storeProduct.count >= diff) {
            carts[index].count = newCount;
            storeProduct.count -= diff;
            console.log(`Cập nhật thành công!`);
          } else {
            console.log("Không đủ số lượng trong cửa hàng.");
          }
        }
      } else {
        console.log("Vị trí không hợp lệ.");
      }
  
    } else if (action === "D") {
      // D: Hỏi người dùng vị trí của sản phẩm muốn xóa trong carts
      let index = Number(prompt("Nhập vị trí sản phẩm muốn xóa trong giỏ hàng (bắt đầu từ 0):"));
      if (index >= 0 && index < carts.length) {
        let productName = carts[index].name;
        let storeProduct = stores.find(item => item.name === productName);
        if (storeProduct) {
          // Cập nhật lại count trong stores khi xóa sản phẩm khỏi giỏ hàng
          storeProduct.count += carts[index].count;
          carts.splice(index, 1);
          console.log(`Sản phẩm ${productName} đã được xóa khỏi giỏ hàng.`);
        }
      } else {
        console.log("Vị trí không hợp lệ.");
      }
  
    } else if (action === "E") {
      // E: Thoát khỏi vòng lặp và kết thúc chương trình
      console.log("Cảm ơn bạn đã đến với Rikkei Stores!");
    } else {
      console.log("Lựa chọn không hợp lệ. Vui lòng nhập lại.");
    }
  }
  