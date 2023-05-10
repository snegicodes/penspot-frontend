import React from "react";
import editImg from "../assets/images/edit.png";
import deleteImg from "../assets/images/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content" style={{ paddingLeft: "20px" }}>
        <img
          src={
            "https://images.pexels.com/photos/10935039/pexels-photo-10935039.jpeg?auto=compress&cs=tinysrgb&w=800"
          }
          alt="img"
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/16557436/pexels-photo-16557436.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="user"
          />
          <div className="info">
            <span>Sarthak</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to="/write?edit=2">
              <img src={editImg} alt="" />
            </Link>
            <img src={deleteImg} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            minus eos odio aliquid perspiciatis molestiae assumenda, aliquam
            dolore obcaecati repudiandae placeat id ab nobis beatae cum magnam!
            Nemo vitae maiores id sed fugit optio repudiandae assumenda eos,
            officiis deleniti est illum odit aspernatur. Maxime velit repellat
            ab quibusdam asperiores amet qui porro similique perspiciatis quasi,
            incidunt laudantium excepturi provident suscipit saepe nulla
            deserunt sit repellendus vel cum, aliquam ipsa rem harum
            consequatur. Quas repudiandae quis exercitationem vitae? Veniam
            laboriosam minus sit architecto ipsum minima nostrum sint atque
            reprehenderit facilis distinctio, ea non, quasi nesciunt voluptas
            quia odit temporibus, rem illo.
          </p>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            maxime dicta temporibus. Libero dicta rem, quisquam voluptatum,
            dolorem alias minus commodi, accusantium modi sed autem. Commodi
            quas nisi similique! Saepe, vero autem facere natus distinctio nemo
            cumque dicta temporibus quasi esse rerum voluptas dolores ratione
            eos soluta ab neque voluptatem ipsam debitis at harum possimus
            mollitia ad officia. Assumenda, cum suscipit! Accusantium magnam
            voluptates earum similique sequi natus modi dolorum molestias sed
            numquam quod, incidunt fuga ipsam voluptatem aut, eaque cupiditate,
            nam reiciendis dicta odit error quisquam velit dolore! Voluptates
            aliquam saepe veritatis doloremque laboriosam! Sint eos cupiditate
            quas et! Repellat iure cum quos incidunt consequuntur, quas totam?
            Possimus vel dolorem sint recusandae. Aut, veritatis consectetur? A
            placeat sunt ipsam ex explicabo minus dicta hic sed debitis, iure
            labore qui quo illo fugiat molestias blanditiis facere ad, sint modi
            omnis itaque ea. Veritatis sequi ipsa itaque dolores ducimus
            temporibus quas!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            nulla eveniet enim error excepturi tenetur eos laudantium modi,
            harum temporibus velit! Perspiciatis dolore optio rem, modi repellat
            impedit, suscipit delectus nisi soluta excepturi deserunt maiores.
            Ex adipisci deserunt exercitationem quod recusandae explicabo, a
            officia odit necessitatibus doloribus sapiente quaerat cupiditate!
          </p>
        </p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
};

export default Single;
