import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { ProjectStorm } from "./projectstorm/main";
import VisNetwork from "./visjs";
import { Joint } from "./joint";
import { ReactFlowPage } from "./reactflow/react-flow";

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="flex flex-row [&>li]:m-2">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/jointjs">JointJS</Link>
          </li>
          <li>
            <Link to="/reactflow">React Flow</Link>
          </li>
          <li>
            <Link to="/storm">Project Storm</Link>{" "}
            <a
              href="http://projectstorm.cloud/react-diagrams/?path=/story/simple-usage--events-and-listeners"
              className=" text-blue-600"
            >
              (docs)
            </a>
          </li>
          <li>
            <Link to="/visjs">VisJs</Link>
            <a
              href="https://visjs.github.io/vis-network/examples/"
              className=" text-blue-600"
            >
              (docs)
            </a>{" "}
          </li>

          <li>
            Apollon
            <a
              href="https://github.com/ls1intum/Apollon/tree/develop"
              className=" text-blue-600"
            >
              (docs)
            </a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

const Home = () => {
  return (
    <div>
      <section>
        Dobry zacatek na moznosti s diagramy je tato stranka{" "}
        <a
          href="https://modeling-languages.com/javascript-drawing-libraries-diagrams/"
          className=" text-blue-600"
        >
          https://modeling-languages.com/javascript-drawing-libraries-diagrams/
        </a>
      </section>
      <section className="m-1 p-1 bg-teal-100">
        JointJS
        <ul className="list-disc">
          <li>
            hezke featury, jako integrace s Reactem, jsou dostupne v placene
            verzi
          </li>
          <li>
            pamatuju si, ze typovani grafickych komponent nebyla uplne pohodicka
          </li>
          <li>vyuzivane na tom tietomalitu</li>
          <li>
            snazil jsem se rozchodit nejake mini demicko, jako u jinych knihoven
            a po hodine nemam nic :-(
          </li>
        </ul>
      </section>
      <section>
        GoJS{" "}
        <a href="" className="text-blue-600">
          (docs)
        </a>
        <ul>
          <li>
            maji uml{" "}
            <a
              href="https://gojs.net/latest/samples/umlClass.html"
              className="text-blue-600"
            >
              demicko
            </a>
          </li>
          <li>asi dlouha historie za tou knihovnou</li>
          <li>hodne veci reseno pres jQuery, podobne jako u JointJS</li>
        </ul>
      </section>
      <section className="m-1 p-1 bg-teal-100">
        Project Storm - react diagrams{" "}
        <a
          href="http://projectstorm.cloud/react-diagrams/?path=/story/simple-usage--events-and-listeners"
          className=" text-blue-600"
        >
          (docs)
        </a>
        <ul>
          <li>flow grafy</li>
          <li>
            takze se daji delat propojky, ale jen z urciteho "portu" do urciteho
            portu
          </li>
          <li>
            prakticky muze byt mnoho hran mezi dvema vrcholy, daji se od sebe
            odlisovat
          </li>
          <li>
            hrany muzou mit popisky, da se s nimi hybat. Nevim jak u nich
            odebrat zalomeni
          </li>
        </ul>
      </section>
      <section className="m-1 p-1 bg-teal-100">
        VisJs
        <a
          href="https://visjs.github.io/vis-network/examples/"
          className=" text-blue-600"
        >
          docs
        </a>
        )
        <ul className=" list-disc">
          <li>daji se pouzivat html elementy jako styly pro krabicky</li>
          <li>da se kreslit vic hran mezi krabickami, nijak to neni omezene</li>
          <li>hrany mezi vrcholy se nedaji nijak upravovat</li>
        </ul>
      </section>
      <section className="m-1 p-1 bg-teal-100">
        Apollon{" "}
        <a
          href="https://github.com/ls1intum/Apollon/tree/develop"
          className=" text-blue-600"
        >
          (docs)
        </a>
        . Projekt z TU Mnichov, online UML editor, vypada, ze to maji delane od
        nuly s tim vykreslovanim, komponenty renderuji jako SVGcka.
      </section>
      <section className="m-1 p-1 bg-red-100">
        Nepouzitelne:
        <ul className="list-disc ">
          <li>
            mermaid - maji svuji md-like jazyk, neni interaktivni{" "}
            <a
              href="https://mermaid.js.org/intro/getting-started.html"
              className=" text-blue-600"
            >
              (docs)
            </a>
          </li>
          <li>
            beautiful react diagrams - zase nejaky flow grafiky
            <a
              href="https://antonioru.github.io/beautiful-react-diagrams/#/Diagram%20Component"
              className=" text-blue-600"
            >
              (docs)
            </a>
          </li>
          <li>
            reactFlow - flow grafy, asi nepouzitelne, skoda, maji hezkou
            dokumentaci
            <a
              href="https://reactflow.dev/docs/examples/edges/simple-floating-edges/"
              className=" text-blue-600"
            >
              (docs)
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

const App = () => {
  return (
    <>
      <div className="App text-lg w-full h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="home" element={<Home />} />
              <Route path="storm" element={<ProjectStorm />} />
              <Route path="reactflow" element={<ReactFlowPage />} />
              <Route path="visjs" element={<VisNetwork />} />
              <Route path="jointjs" element={<Joint />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
