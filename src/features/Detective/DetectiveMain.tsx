import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import money from "../../assets/shared/dollar.png";
import exp from "../../assets/shared/exp.png";
import useOutOfModalTwoRefs from "../../hooks/useOutOfModalTwoRefs";
import DetectiveMainStars from "./DetectiveMainStars";

export default function DetectiveMain() {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const secondModalRef = useRef<HTMLDivElement | null>(null);
  useOutOfModalTwoRefs({ showModal, setShowModal, modalRef, secondModalRef });
  console.log(showModal);

  return (
    <>
      <main className="w-full h-fit p-[1rem] gap-[1rem] bg-white rounded-lg shadow-sm shadow-gray-400 grid grid-cols-[repeat(auto-fit,minmax(25rem,1fr))] grid-rows-[repeat(auto-fit,minmax(35rem,1fr))]">
        <div className={`w-full min-h-[35rem] h-ful relative rounded-md`}>
          <div
            ref={modalRef}
            onClick={() => setShowModal(true)}
            className={`absolute bg-black ${
              showModal ? "opacity-0" : "opacity-5"
            } z-[0] rounded-md top-0 bottom-0 right-0 left-0 cursor-pointer transition-all hover:opacity-10`}
          ></div>
          <div className="bg-white h-full w-full shadow-sm shadow-black rounded-md p-[1rem] flex flex-col gap-[1rem]">
            <div>
              <img src="" alt="mission1" />
            </div>
            <div className="mt-auto flex flex-col gap-[.5rem]">
              <h4 className="text-[1.4rem]">Text</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti itaque officiis dolor, dignissimos harum voluptatem
                delectus! Nostrum voluptate rerum debitis!
              </p>
              <div className="flex items-center justify-between mt-[3rem]">
                <div className="flex items-center gap-[.5rem]">
                  <div className="flex items-center justify-between gap-[.3rem]">
                    <img
                      className="w-[3rem] h-[3rem]"
                      src={money}
                      alt="Money"
                    />
                    <p className="text-[1.2rem] font-medium text-green-500">
                      370
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <img className="w-[3rem] h-[3rem]" src={exp} alt="Exp" />
                    <p className="text-[1.2rem] font-medium text-green-500">
                      120
                    </p>
                  </div>
                </div>

                <DetectiveMainStars numberOfStars={1} />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full min-h-[35rem] h-ful relative rounded-md">
          <div className="absolute bg-black opacity-5 rounded-md top-0 bottom-0 right-0 left-0 cursor-pointer transition-all"></div>
          <div className="bg-white h-full w-full shadow-sm shadow-black rounded-md p-[1rem]">
            <p>Text</p>
          </div>
        </div>
        <div className="w-full min-h-[35rem] h-ful relative rounded-md">
          <div className="absolute bg-black opacity-5 rounded-md top-0 bottom-0 right-0 left-0 cursor-pointer transition-all"></div>
          <div className="bg-white h-full w-full shadow-sm shadow-black rounded-md p-[1rem]">
            <p>Text</p>
          </div>
        </div>
        <div className="w-full min-h-[35rem] h-ful relative rounded-md">
          <div className="absolute bg-black opacity-5 rounded-md top-0 bottom-0 right-0 left-0 cursor-pointer transition-all"></div>
          <div className="bg-white h-full w-full shadow-sm shadow-black rounded-md p-[1rem]">
            <p>Text</p>
          </div>
        </div>
        <div className="w-full min-h-[35rem] h-ful relative rounded-md">
          <div className="absolute bg-black opacity-5 rounded-md top-0 bottom-0 right-0 left-0 cursor-pointer transition-all"></div>
          <div className="bg-white h-full w-full shadow-sm shadow-black rounded-md p-[1rem]">
            <p>Text</p>
          </div>
        </div>
        <div className="w-full min-h-[35rem] h-ful relative rounded-md lg:hidden">
          <div className="absolute bg-black opacity-5 rounded-md top-0 bottom-0 right-0 left-0 cursor-pointer transition-all"></div>
          <div className="bg-white h-full w-full shadow-sm shadow-black rounded-md p-[1rem]">
            <FontAwesomeIcon
              className="absolute top-[calc(50%-2.5rem)] left-[calc(50%-1.55rem)] text-[5rem]"
              icon={faQuestion}
            />
          </div>
        </div>
      </main>
      <div
        className={`${
          showModal ? "" : "hidden"
        } transition-all fixed top-0 bottom-0 left-0 right-0 bg-black opacity-50`}
      ></div>
      <aside
        ref={secondModalRef}
        className={`${
          showModal ? "top-[calc(10rem)] 2xl:top-[13%] delay-100" : ""
        } transition-all delay-100 w-[70%] h-[80%] top-[-90%] left-[15%] 2xl:left-[calc(50%-50rem)] max-w-[100rem] max-h-[110rem] bg-cyan-100 shadow-black shadow-sm p-[1rem] rounded-md z-[10] fixed`}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
        quis veniam fugit tempore quia tempora accusamus labore distinctio
        dolores, quasi voluptates facilis dicta ex, quo iure delectus ratione
        officia aliquam aspernatur rerum fuga recusandae modi cupiditate! Nulla
        laudantium architecto placeat.
      </aside>
    </>
  );
}
