// $(function () {
//   var numbers = $.latin2Arabic.toArabic("1/2/3");
//   $(body).append(numbers);
// });

let i = 1;
let totalTax = 0;
let totality = 0;
$(document).on("click", ".add-tr", function () {
  let trAddData = `<tr class="tr-row"> <td class="tr-num">${i}</td>  <td><select> <option >کالا</option>
          <option >خدمات</option></select></td><td><input class="description">  
           </td><td><input class="unit">   </td><td><input type="num" data-type="${i}" class="num">   </td><td><input class="unit-amount"> 
             </td> <td><input class="discount">   </td><td><input name="${i}" class="tax">   </td><td class="total-cost">  
              </td><td><span id="save">&#x1f4be;</span> <span style="display:none" id="edit">&#9998;</span><span id="undo">&#8630;</span><span style="display:none" id="delete">&#128465;</span> </td></tr>`;

  $("#myTable tbody").append(trAddData);

  // let num=$("#myTable tbody tr td #num")
  // console.log($("#num").val());

  // let num = $("tbody td input.num").val();
  // console.log(num.val());

  //   console.log(222);
  i++;
});

$(document).on("click", "#save", function () {
  let tr = $(".tr-row");
  let num = $(".num");
  let unitAmount = $(".unit-amount");
  let discount = $(".discount");
  let tax = $(".tax");
  let totalCost = $(".total-cost");
  // let number=Number(num.val());
  let number = Number($(num[i - 2]).val());
  let unitNum = Number($(unitAmount[i - 2]).val());
  let discountPercent = Number($(discount[i - 2]).val());

  let discountNum = (discountPercent / 100) * (unitNum * number);
  // let discountNum=Number($(discount[i-2]).val())
  let taxNum = Number($(tax[i - 2]).val());
  let total = number * unitNum - discountNum + taxNum;
  totalString = total.toLocaleString();
  totalTax = totalTax + taxNum;
  totality = totality + total;
  totalTaxString = totalTax.toLocaleString();
  totalityString = totality.toLocaleString();
  unitAmountString = unitNum.toLocaleString();
  discountString = discountNum.toLocaleString();
  $(totalCost[i - 2]).html(totalString);
  $(unitAmount[i - 2]).val(` ${unitAmountString} ریال`);
  $(discount[i - 2]).val(` ${discountString} ریال`);
  $("#totality").html(`مبلغ کل ${totalityString} ریال `);
  $("#totalTax").html(`مالیات کل :${totalTaxString} ریال `);
  num.prop("readonly", true);
  unitAmount.prop("readonly", true);
  discount.prop("readonly", true);
  tax.prop("readonly", true);
  totalCost.prop("readonly", true);
  // let save = $("#save");
  // let edit = $("#edit");
  // let undo = $("#undo");
  // let deleteIcon = $("#delete");

  // $(save[i - 2]).hide();

  // $(edit[i - 2]).css("display", "inline-block");
  // $(undo[i - 2]).hide();
  // $(deleteIcon[i - 2]).css("display", "inline-block");

  // $("#save").html("&#9998;");
  // $(document).on("click", "#edit", function () {
  //   num.prop("readonly", false);
  //   unitAmount.prop("readonly", false);
  //   discount.prop("readonly", false);
  //   tax.prop("readonly", false);
  //   totalCost.prop("readonly", false);
  // });
  // // // $(".undo").html("&#128465;");
  // $(document).on("click", "#delete", function () {
  //   $(tr[i - 2]).remove();
  // });
  // console.log(num);
  // console.log(num[0]);
  // console.log($(num[i-2]));
  // console.log($(num[i-2]).val());
  // console.log($(num[i-2]).val()+4);

  // console.log((num[i-2]).val());
  // console.log(number);
  // console.log($(num[i-2]).val());
  // console.log(i);

  // i++
});
