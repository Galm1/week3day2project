// console.log(customers);
// console.log(customers.results[0].name);
// const cust = customers.results;
// console.log(cust[0].name.first);
// let firstname = cust[0].name.first;
// console.log(cust[0].name.last);
// let lastname = cust[0].name.last;
// let fullname = `${firstname} ${lastname}`;

//  console.log(customers);
// const customerInfo = customers.results
//  for (var i = 0; i < customerInfo.length; i++) {
//    console.log(customerInfo[i].picture.thumbnail);
//    console.log(customerInfo[i].name.first);
//    console.log(customerInfo[i].name.last);
//    console.log(customerInfo[i].email);
//    console.log(customerInfo[i].location.street);
//    console.log(customerInfo[i].location.city);
//    console.log(customerInfo[i].location.state);
//    console.log(customerInfo[i].location.postcode);
//    console.log(customerInfo[i].phone);
//    console.log(customerInfo[i].id.value);
//  }

// const asdf = `
//
// <article>
//   <h2>${blogPost.title}</h2>
//   <div class="meta">
//     <span class="date">Written on ${blogPost.meta.date}</span>
//   </div>
//   <div class="post">
//     <img src="${blogPost.post.image}">
//     ${blogPost.post.content}
//   </div>
//   <div class="site">
//     Part of this content was pulled from <a href="${blogPost.site.url}">${blogPost.site.name}</a>
//   </div>
// </article>
//
// `
//
// document.querySelector(".container").innerHTML = asdf;
for (var i = 0; i < customers.results.length; i++) {


let custImg = customers.results[i].picture.thumbnail
let custFirst = customers.results[i].name.first
let custLast = customers.results[i].name.last
let custFull = `${custFirst} ${custLast}`
let custEmail = customers.results[i].email;
let custCity = customers.results[i].location.city
let custState = customers.results[i].location.state
let custZip = customers.results[i].location.postcode
let custAddress1 = customers.results[i].location.street
let custAddress2 = `${custCity},${custState},${custZip}`
let custPhoneNum = customers.results[i].cell
let custSSN = customers.results[i].id.value;


const custProfile = `

      <article>
        <img src="${custImg}">
        <h6 id='FullName'>${custFull}</h6>
        <p type='email'>${custEmail}</p>
        <p id='Address1'>${custAddress1}</p>
        <p id='Address2'>${custAddress2}</p>
        <p type='tel'>${custPhoneNum}</p>
        <p id='SocialSN'>${custSSN}</p>

      </article>

`

document.querySelector(".container").innerHTML = custProfile;

}
