import { Card } from "react-bootstrap";
import mvcImg from "./MVC.png";

export const MVCMain = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-center" id="step0">
          MVC - Model View Controller
        </Card.Title>

        <div className="d-flex justify-content-center">
          <Card.Img variant="right" src={mvcImg} />
        </div>

        <Card.Subtitle className="mb-2 text-muted text-center">
          Суть подхода разделение бизнес-логики, контроллера и интерфейса. А его
          смысл в том, что каждый из кирпичиков системы MVC будь то Model, View
          или Controller легко поддаются замене.
        </Card.Subtitle>
        <Card.Text>
          <span class=" bg-warning">Бизнес-логика</span> - это функционал
          который приносит конкретную пользу проекту. Например, регистрация
          пользователя, где есть парвило хеширования пароля, сохранение
          пользователя в БД и и.д. Или добавление товара в корзину, оплата
          заказа, сохранение адреса пользователя и т.д.
        </Card.Text>
        <Card.Text>
          <span class=" bg-warning">Интерфейс</span> - это тот графических
          интерфейс с которым взимодействует пользователь: кнопки, формы и т.д.
        </Card.Text>
        <Card.Text>
          <span class=" bg-warning">Контроллер</span> обеспечивает
          взаимодействие с системой: обрабатывает действия пользователя,
          проверяет полученную информацию и передает ее модели. Контроллер
          определяет, как приложение будет реагировать на действия пользователя.
          Также контроллер может отвечать за фильтрацию данных и авторизацию.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
