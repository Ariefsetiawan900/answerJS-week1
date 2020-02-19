function totalItem(price){
  let item = price / 2500;
  let promo = item / 4;
  let totalItem = item + promo;
  return console.log("The boy got", totalItem, "packs of instant noodle");
}

totalItem(50000);
  