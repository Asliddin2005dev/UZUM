import React, { useRef, useState } from "react";

const BOT_TOKEN = "7107932985:AAEiONVblhSxivdRNSRbmBTjyaQkikEiLBQ"
//https://api.telegram.org/bot7107932985:AAEiONVblhSxivdRNSRbmBTjyaQkikEiLBQ/getUpdates
//https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]&parse_mode=html

const CHAT_ID = "-4239460466"
const USER_ID = " 7107932985"



function CardForm({ data }) {
  const [fullName, setFullName] = useState();
  const tel = useRef();
  const address = useRef();
  const messages = useRef();

  const handleSumbit = (e) => {
    e.preventDefault ();

    // let users = {
    //   fullName : fullName ,
    //   tel: tel. Current.value,
    //   address: address.current.value,
    //   messages : messages.current.value,
    // };

    let text = "Buyurtma";
    text += ` Name: ${fullName} %0A`;
    text += ` Tel: ${tel.current.value} %0A`;
    text += ` Address: ${address.current.value} %0A`;
    text += ` Message: ${messages.current.value} %0A`;

    data.forEach((item)=>{
      text+= `mahsulotni nomi: ${item.title}%0A`;
      text+= `mahsulot narxi: ${item.price}%0A`;
      text+= `mahsulot soni: ${item.quantity}%0A %0A %0A`;
    })

    text += 'xarid uchun Rahmat❤️ !!!'
    let url=`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`;


    let api = new XMLHttpRequest();
    api.open("GET",url,true);
    api.send();



    // console.log(users);

  }

  return (
    <div className="input__reg">
      <h4>Malumotlaringizni kriting</h4>
      <form onSubmit={handleSumbit} action="">
        <input required
          onChange={(e) => setFullName(e.target.value)}
          type="text"
          placeholder="To'liqismingizni kriting"
        />
        <input required ref={tel} type="text" placeholder="+998 00 000 00 00" />
        <input required ref={address} type="text" placeholder="Manzilingiz" />
        <input required ref={messages} type="text" placeholder="Habar Yollash" />

        <div className="total">
          <p>umumiy narx</p>
          <p>
            Jami : {""}
            {data.reduce(
              (sum, item, index) => sum + item.price * item.quantity,
              0
            )}
          </p>
        </div>
        <button className='btn-reg'>Rasmiylashtirish</button>
      </form>
    </div>
  );
}

export default CardForm;