for (var i = 0; i < customers.results.length; i++) {


  let newDiv = document.createElement('div');

  newDiv.classList.add('flexx');

  let container = document.querySelector('.container')

  container.appendChild(newDiv);


  let custImg = customers.results[i].picture.large;
  let custFirst = customers.results[i].name.first;
  let custLast = customers.results[i].name.last;
  let custFull = `${custFirst} ${custLast}`;
  let custEmail = customers.results[i].email;
  let custCity = customers.results[i].location.city;
  let custState = customers.results[i].location.state;
  let custZip = customers.results[i].location.postcode;
  let custAddress1 = customers.results[i].location.street;
  let custAddress2 = `${custCity},${custState},${custZip}`;
  let custPhoneNum = customers.results[i].cell;
  let custSSN = customers.results[i].id.value;


  const custProfile = `

      <article>
        <img id ='img' src="${custImg}">
        <h6 id='FullName'>${custFull}</h6>
        <p id='email'>${custEmail}</p>
        <p id='Address1'>${custAddress1}</p>
        <p id='Address2'>${custAddress2}</p>
        <p id='phone'>${custPhoneNum}</p>
        <p id='SocialSN'>${custSSN}</p>

      </article>

`

  newDiv.innerHTML = custProfile;

}
