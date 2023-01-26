import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

function Test() {
  return (
    <>
      <div class="box">
        <div class='t-container'>
          <p>АРХЕТИПИ (ГРЕЧ. ἈΡΧΈΤΥΠΟΝ) — УНІВЕРСАЛЬНІ ОБРАЗИ АБО СИМВОЛИ, КЕРУЮЧІ АСОЦІАЦІЯМИ І ВРАЖЕННЯМИ ЛЮДЕЙ.</p>
        </div>
        <div class='box'>
          <div class='t-container'>
            <h2>ЗА ДОПОМОГОЮ АРХЕТИПІВ ТИ:</h2>
            <li>Знайдеш відповіді на запитання «Хто я в новій реальності? Як мені працювати? Що робити?".</li>
            <li>Зміцниш внутрішні опори - компас, який не дасть збитися зі шляху у важкі хвилини.</li>
            <li>Знайдете почуття впевненості в собі та надійності в «завтрашньому дні» не дивлячись на зовнішні обставини.</li>
            <li>Створиш фундамент особистого бренду, який дозволить бути затребуваним фахівцем та підприємцем.</li>
          </div>
          <div class='t-container'>
            <p>ТЕСТ ПІДСВІЧУЄ ТВОЮ СУПЕРСИЛУ ТА ВИЗНАЧАЄ УНІКАЛЬНЕ ПОЄДНАННЯ РОЛЬОВИХ МОДЕЛЕЙ, У ЯКИХ ТИ НАЙБІЛЬШ ЕФЕКТИВНИЙ, А ЗНАЧИТЬ ОТРИМУЄШ БАЖАНИЙ РЕЗУЛЬТАТ ЛЕГКО ТА ІЗ ЗАДОВОЛЕННЯМ.</p>
          </div>
        </div>
      </div>
      <div>
        <button id='start' onClick={renderTest}>Почати тестування</button>
      </div>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
const renderTest = () => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
root.render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>
)