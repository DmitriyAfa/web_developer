import { Card } from "react-bootstrap";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import img from "./mvc-client-server.png";
export const ClientServerMVC = () => {
  return (
    <Card.Body>
      <OverlayTrigger
        overlay={<Tooltip id="tooltip-disabled">{"Пример на github"}</Tooltip>}
      >
        <Card.Title className="text-center">
          <a
            target="_blank"
            href="https://github.com/DmitriyAfa/MVC/tree/main/node-client-server"
          >
            Клиент-серверное приложение с архитектурой MVC
          </a>
        </Card.Title>
      </OverlayTrigger>
      <Card.Subtitle className="mb-2 text-center">
        MVC паттерн подходит для клиент-серверного приложения. Принцип работы
        клиент-серверного приложения в следующем:
      </Card.Subtitle>
      <Card.Text>
        <span className=" bg-warning">Клиент</span> - представляет из себя
        компьютерное (смартфон/ipad) устройство, которое отсылает определённые
        запросы к серверу. <br />В примере на проекте в гитхабе примером такого
        запроса от клиента является обращение к определенному адресу в адресной
        строке браузера.
        <span className=" bg-info">
          Клиент отправляет post-запрос на адрес "/users"
        </span>
      </Card.Text>
      <Card.Text>
        <span className=" bg-warning">
          Сервер - это сервер (компьютер) который делает какие-то вычисления на
          основе информации с сервера. Затем возвращает их на клиент.
        </span>{" "}
        - проекте на гитхаб им является node.js. в виде express
        <ol className=" bg-info">
          <li>
            Сервер: принимает post-запрос на адрес "/users" и отдает его на
            обработку в controller
          </li>
          <li>Контроллер: взаимодействует с моделью</li>
          <li>Модель: возвращает данные (набор пользователей) в controller</li>
          <li>
            View: затем контроллер обращается к HTML шаблонизатору и передает
            данные которые были получены из модели
          </li>
          <li>View: отрисовывает HTML-код и передает его контроллеру </li>
          <li>Controller: обновляет html на страницу по адресу "/users"</li>
        </ol>
      </Card.Text>
      <div className="d-flex justify-content-center">
        <Card.Img style={{ width: "100%" }} variant="right" src={img} />
      </div>
    </Card.Body>
  );
};
