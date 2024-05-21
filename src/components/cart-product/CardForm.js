import React from "react";
import { useRef } from "react";
import { useState } from "react";

const BOT_TOKEN = "7107932985:AAEiONVblhSxivdRNSRbmBTjyaQkikEiLBQ"
//https://api.telegram.org/bot7107932985:AAEiONVblhSxivdRNSRbmBTjyaQkikEiLBQ/getUpdates
//https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]&parse_mode=html

const CHAT_ID = "-4239460466"
const USER_ID = " 7107932985"


function CardForm({ data }) {
  const [fullName, setfullName] = useState("");
  const tel = useRef();
  const address = useRef();
  const message = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    let text = "Buyurtma";
    text += ` Name: ${fullName} %0A`;
    text += ` Tel: ${tel.current.value} %0A`;
    text += ` Address: ${address.current.value} %0A`;
    text += ` Message: ${message.current.value} %0A %0A`;

    data.forEach((item) => {
      text += `Mahsulot nomi: ${item.title} %0A`;
      text += `Mahsulot narxi: ${item.price} %0A`;
      text += `Mahsulot soni: ${item.quantity} %0A %0A`;
    });

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
  };

  return (
    <div className="input__reg">
      <h3>Ma'lumotlaringizni kirirting</h3>
      <form onSubmit={handleSubmit} action="">
        <input
          required
          onChange={(e) => setfullName(e.target.value)}
          type="text"
          placeholder="Toliq ismingizni kiriting"
        />
        <input required ref={tel} type="text" placeholder="+998 00 000 00 00" />
        <input required ref={address} type="text" placeholder="Manzilingiz" />
        <input required ref={message} type="text" placeholder="Habar yollash" />

        <div className="total">
          <p>Umumiy narx</p>
          <p>
            Jami: {""}
            {data.reduce(
              (sum, item, index) => sum + item.price * item.quantity,
              0
            )}
          </p>
        </div>

        <button className="btn-reg">Rasmiylashtirishga o'tish</button>
      </form>
    </div>
  );
}

export default CardForm;
