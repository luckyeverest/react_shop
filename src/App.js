
import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <headers>
        <div className='headerLeft'>
          <img width={40} height={40} src='../img/logo.png' />
          <div className='headerInfo'>
            <h3 className=''>
              Магазин кросовок
            </h3>
            <p className=''>Магазин лучших кросовок</p>
          </div>
        </div>
        <ul className='headerRight'>
          <li className=''>
            <img width={18} height={18} src="img/cart.svg" alt="Корзина" />
            <span className=''>120 rub</span>
          </li>
          <li className=''>
            <img width={18} height={18} src="img/user.svg" alt="Пользователь" />
          </li>
        </ul>
      </headers>
      <div className='content'>
        <h1>Все кросовки</h1>
        .................
      </div>
    </div>
  );
}

export default App;
