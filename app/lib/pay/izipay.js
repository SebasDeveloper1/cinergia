export const getDataOrderDynamic = () => {
  const currentTimeUnix = Math.floor(Date.now()) * 1000;
  const transactionId = currentTimeUnix.toString().slice(0, 14);
  return {
    currentTimeUnix,
    transactionId,
  };
};

export async function getTokenSession(
  transactionId,
  {
    requestSource = 'ECOMMERCE',
    merchantCode = '',
    orderNumber = '',
    publicKey = '',
    amount = '',
  },
) {
  let headers = new Headers();
  headers.append('Accept', 'application/json');

  const response = await fetch(
    'https://api.cursosya.info/api/token?transactionId=' + transactionId,
    {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        requestSource,
        merchantCode,
        orderNumber,
        publicKey,
        amount,
      }),
    },
  );

  console.log('hola', response);

  if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
  }

  const result = await response.json();
  return result;
}

export async function saveMoviePay(transactionId, clientId, movieId, amount) {
  try {
    let data = {
      clientId: clientId,
      movieId: movieId,
      transactionId: transactionId,
      amount: amount,
    };
    const response = await fetch('https://api.cursosya.info/api/client-movie', {
      method: 'POST',
      headers: {
        accept: 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}

// const callbackResponsePayment = (response) => {
//   //console.log(JSON.stringify(response, null, 2));

//   /************** Transaccion exitosa CODE=00 *************/
//   if (response.code == '021') {
//     saveMoviePay(TRANSACTION_ID, CLIENT_ID, MOVIE_ID, ORDER_AMOUNT).then(
//       (res) => {
//         const { code } = res;
//         if (code == 1) {
//           console.log('PLAY MOVIE');
//         }
//       },
//     );
//   }
// };
