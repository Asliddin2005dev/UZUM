import React, { useRef, useState } from "react";
import "./CardProduct.css";

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

  const heandleSubmit = (e) => {
    e.preventDefault();

    let text = "Buyurtma";
    text += ` Name: ${fullName} %0A`;
    text += ` TeL: ${tel.current.value} %0A`;
    text += ` Address ${address.current.value} %0A`;
    text += ` Comment ${messages.current.value} %0A %0A`;

    data.forEach((item) => {
      text += `Maxsulot Nomi: ${item.title} %0A `;
      text += `Maxsulot Narxi: ${item.price} %0A `;
      text += `Maxsulot Soni: ${item.quantity} %0A %0A`;
    });

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    setFullName("");
    tel.current.value = "";
    address.current.value = "";
    messages.current.value = "";
  };

  return (
    <div className="input__reg">
      <h3>Malumotlaringizni kriting</h3>
      <form onSubmit={heandleSubmit}>
        <input
          required
          onChange={(e) => setFullName(e.target.value)}
          type="text"
          placeholder="To'liqismingizni kriting"
        />
        <input
          required
          ref={tel}
          type="number"
          placeholder="+998 00 000 00 00"
        />
        <input required ref={address} type="text" placeholder="Manzilingiz" />
        <input
          required
          ref={messages}
          type="text"
          placeholder="Habar Yollash"
        />

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

        <button className="btn-reg">Rasmilashtirishga o'tish</button>
      </form>
    </div>
  );
}

export default CardForm;

// let users = {
//   fullName: fullName,
//   tel: tel.current.value,
//   address: address.current.value,
//   messages: messages.current.value,
// };
