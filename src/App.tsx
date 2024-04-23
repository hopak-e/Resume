import { useState } from "react";

function App() {
  const [isMapleInfoImg, setIsMapleInfoImg] = useState<boolean>(false);
  const [isSoopoolImg, setIsSoopoolImg] = useState<boolean>(false);

  const handleImgClick = (src: string) => {
    window.open(src);
  };

  return (
    <main className="grow shrink bg-white max-w-[680px] mx-auto text-[12px] sm:text-[14px]">
      <div className="flex flex-col wrap p-10">
        <h1 className="flex flex-col">
          <span className="text-[36px]">안녕하세요!</span>
          <span>
            프론트엔드 개발자,
            <span className="emphasize">박상호</span>
            입니다.
          </span>
        </h1>
        <div className="flex justify-center py-10">
          <img
            src="https://hopak-e.github.io/Resume/img/park_sang_ho.jpg"
            alt="sangho"
            className="w-[240px] rounded-md"
          />
        </div>

        <section className="section">
          <h3>CONTACT.</h3>
          <div className="mt-3 space-y-2">
            <div className="flex items-center gap-x-3">
              <span className="text-[20px] font-[600] tracking-tight">
                Email.
              </span>
              <a
                href="mailto:a328028@gmail.com?subject=안녕하세요"
                className="link_text"
              >
                a328028@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-x-3">
              <span className="text-[20px] font-[600] tracking-tight">
                GitHub.
              </span>
              <a href="https://github.com/hopak-e" className="link_text">
                https://github.com/hopak-e
              </a>
            </div>
            <div className="flex items-center gap-x-3">
              <span className="text-[20px] font-[600] tracking-tight">
                Blog.
              </span>
              <a href="https://hopak-e.tistory.com" className="link_text">
                https://hopak-e.tistory.com
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <h3>INTRODUCE.</h3>
          <div className="font-[500]">
            <ul className="space-y-1">
              <li className="flex items-center">
                <span className="content_dot"></span>
                <span>
                  <span className="emphasize">함께 학습하며 성장하자</span>라는
                  모토를 갖고 개발 스터디 활동에 적극적으로 임하고 있습니다.
                </span>
              </li>
              <li className="flex items-center">
                <span className="content_dot"></span>
                <span>
                  코드를 작성할 때 항상 이유를 생각하고, 기초가 되는 지식의
                  올바른 학습을 추구합니다.
                </span>
              </li>
              <li className="flex items-center">
                <span className="content_dot"></span>
                <span>
                  <span className="emphasize">기록의 가치</span>가 얼마나
                  중요한지 느끼고, 학습한 지식을 체화하기 위해 블로그에 기록하며
                  학습합니다.
                </span>
              </li>
              <li className="flex items-center">
                <span className="content_dot"></span>
                <span>
                  {`더 나은 코드로 나아가기 위한 마이그레이션이나 `}
                  <span className="emphasize">리팩토링 과정</span>을 즐겁게
                  생각합니다.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h3>PROJECTS.</h3>
          <article className="flex flex-col gap-y-1 mt-4">
            <h3>메이플스토리 유저 정보를 한눈에, MapleInfo</h3>
            <div className="space-x-1">
              <span>👉</span>
              <a href="https://maple-info.netlify.app/" className="link_text">
                결과물 보러 가기
              </a>
            </div>
            <p className="font-[500]">2024.03.27 ~ 2024.04.19</p>
            <div className="flex items-center gap-2">
              <div className="stack">React</div>
              <div className="stack">TypeScript</div>
              <div className="stack">Redux</div>
              <div className="stack">Tailwind CSS</div>
            </div>
            <div className="mt-4 space-y-4">
              <div>
                <h4>개요</h4>
                <p className="project_content">
                  &nbsp;유저가 착용한 장비, 스킬, 스탯 등을 알고 싶지
                  않으신가요? MapleInfo로 원하는 유저의 정보들을 바로 검색하고
                  정보를 자세하게 확인할 수 있습니다. 또한 내 큐브와 스타포스의
                  기록을 확인할 수 있습니다. 이 뿐만 아니라 해당 유저의 본
                  캐릭터까지 추적할 수 있습니다.
                </p>
              </div>
              <div>
                <h4>기획 의도</h4>
                <p className="project_content">
                  &nbsp;재미있게 플레이 했던 게임의 OPEN API가 공개되면서 유저의
                  상세한 정보와 큐브, 스타포스의 히스토리 정보를 얻을 수 있게
                  되었고, 이를 웹 사이트로 보기 쉽게 하고자 기획한 프로젝트
                  입니다. 검색 기능을 통해 유저 정보와 큐브, 스타포스의
                  히스토리를 확인 할 수 있습니다.
                </p>
              </div>
              <div>
                <h4>주요 기능</h4>
                <ul className="font-[500] py-2">
                  <li className="flex items-center">
                    <span className="content_dot"></span>
                    <span>MapleStory Open API를 이용한 유저 검색 기능</span>
                  </li>
                  <li className="flex items-center">
                    <span className="content_dot"></span>
                    <span>길드 검색 기능</span>
                  </li>
                  <li className="flex items-center">
                    <span className="content_dot"></span>
                    <span>큐브 결과 조회 기능</span>
                  </li>
                  <li className="flex items-center">
                    <span className="content_dot"></span>
                    <span>스타포스 결과 조회 기능</span>
                  </li>
                  <li className="flex items-center">
                    <span className="content_dot"></span>
                    <span>본 캐릭터 추적 기능</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4>저장소</h4>
                <div className="space-x-1">
                  <span>👉</span>
                  <a
                    href="https://github.com/hopak-e/MapleInfo"
                    className="link_text"
                  >
                    GitHub Repository 가기
                  </a>
                </div>
              </div>

              <div>
                <div
                  className="flex items-center"
                  onClick={() => setIsMapleInfoImg(!isMapleInfoImg)}
                >
                  <h4
                    className={`${
                      isMapleInfoImg ? "" : "link_text"
                    } cursor-pointer`}
                  >
                    구현 이미지 보기
                  </h4>
                </div>

                <div
                  className={`grow shrink ${
                    isMapleInfoImg ? "block" : "hidden"
                  }`}
                >
                  <p>각 이미지 클릭시 원본 크기로 보실 수 있습니다.</p>
                  <div className="grid grid-cols-2 gap-4 font-[500]">
                    <div className="border border-border-50 rounded-md p-1">
                      <img
                        src="https://hopak-e.github.io/Resume/img/mapleinfo_main.gif"
                        alt="메인 페이지"
                        className="w-full h-[200px]"
                        onClick={() =>
                          handleImgClick(
                            "https://hopak-e.github.io/Resume/img/mapleinfo_main.gif"
                          )
                        }
                      />
                      <p className="text-center">메인 페이지</p>
                    </div>
                    <div className="border border-border-50 rounded-md p-1">
                      <img
                        src="https://hopak-e.github.io/Resume/img/mapleinfo_user_data.gif"
                        alt="유저 페이지"
                        className="w-full h-[200px]"
                        onClick={() =>
                          handleImgClick(
                            "https://hopak-e.github.io/Resume/img/mapleinfo_user_data.gif"
                          )
                        }
                      />
                      <p className="text-center">유저 페이지</p>
                    </div>
                    <div className="border border-border-50 rounded-md p-1">
                      <img
                        src="https://hopak-e.github.io/Resume/img/mapleinfo_guild.gif"
                        alt="길드 페이지"
                        className="w-full h-[200px]"
                        onClick={() =>
                          handleImgClick(
                            "https://hopak-e.github.io/Resume/img/mapleinfo_guild.gif"
                          )
                        }
                      />
                      <p className="text-center">길드 페이지</p>
                    </div>
                    <div className="border border-border-50 rounded-md p-1">
                      <img
                        src="https://hopak-e.github.io/Resume/img/mapleinfo_cube.gif"
                        alt="큐브 페이지"
                        className="w-full h-[200px]"
                        onClick={() =>
                          handleImgClick(
                            "https://hopak-e.github.io/Resume/img/mapleinfo_cube.gif"
                          )
                        }
                      />
                      <p className="text-center">큐브 페이지</p>
                    </div>
                    <div className="border border-border-50 rounded-md p-1">
                      <img
                        src="https://hopak-e.github.io/Resume/img/mapleinfo_starforce.gif"
                        alt="스타포스 페이지"
                        className="w-full h-[200px]"
                        onClick={() =>
                          handleImgClick(
                            "https://hopak-e.github.io/Resume/img/mapleinfo_starforce.gif"
                          )
                        }
                      />
                      <p className="text-center">스타포스 페이지</p>
                    </div>
                    <div className="border border-border-50 rounded-md p-1">
                      <img
                        src="https://hopak-e.github.io/Resume/img/mapleinfo_track_char.gif"
                        alt="본캐 추적 페이지"
                        className="w-full h-[200px]"
                        onClick={() =>
                          handleImgClick(
                            "https://hopak-e.github.io/Resume/img/mapleinfo_track_char.gif"
                          )
                        }
                      />
                      <p className="text-center">본캐 추적 페이지</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <div></div>
          <div></div>
        </section>

        <article className="flex flex-col gap-y-1 mt-4 section">
          <h3>프로젝트 팀원을 구할 땐, 수풀</h3>
          <div className="flex gap-x-4">
            <div>
              <span>👉 </span>
              <a
                href="https://hopak-e.tistory.com/category/%ED%86%A0%EC%9D%B4%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EC%88%98%ED%92%80"
                className="link_text"
              >
                블로깅
              </a>
            </div>
            <div>
              <span>👉 </span>
              <a
                href="https://www.notion.so/9116d3d29aa049f39dd031e6541f1a41"
                className="link_text"
              >
                진행 과정 및 경험과 성장
              </a>
            </div>
          </div>
          <p className="font-[500]">2022.09 ~ 2022.10</p>
          <div className="flex items-center gap-2">
            <div className="stack">React</div>
            <div className="stack">TypeScript</div>
            <div className="stack">React-query</div>
            <div className="stack">Tailwind CSS</div>
          </div>

          <div className="mt-4 space-y-4">
            <div>
              <h4>개요</h4>
              <p className="project_content">
                &nbsp;팀 프로젝트을 진행하고 싶지만 팀원이나 팀을 구하기
                힘드신가요? 수풀에서 바로 팀 프로젝트를 진행해보세요! 개발자를
                위한 팀 프로젝트 모집 사이트입니다. 사용하는 스택별로 팀이나
                팀원을 구할 수 있습니다.
              </p>
            </div>
            <div>
              <h4>기획 의도</h4>
              <p className="project_content">
                &nbsp;팀 프로젝트나 스터디를 진행하고 싶지만 모집 사이트가
                명확하게 있지 않아 느꼈던 불편함을 해소하고자 기획한
                프로젝트입니다. 원하는 스택을 이용해 팀원 및 팀을 구할 수
                있습니다.
              </p>
            </div>
            <div>
              <h4>주요 기능</h4>
              <ul className="py-1 pl-2">
                <li className="flex items-center">
                  <div className="content_dot"></div>
                  <span>사용 스택을 기반으로 스터디 및 프로젝트 모집</span>
                </li>
                <li className="flex items-center">
                  <div className="content_dot"></div>
                  <span>
                    지원하기, 북마크 기능. 북마크에서 확인가능하며, 해당
                    게시글로 이동
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="content_dot"></div>
                  <span>스터디와 프로젝트에서 사용하는 스택의 순위 조회</span>
                </li>
              </ul>
            </div>
            <div>
              <h4>기여한 점</h4>
              <ul className="py-1 pl-2">
                <li className="flex items-center">
                  <div className="content_dot"></div>
                  <span>프로젝트에 전반적인 기획 및 디자인, 배포 관리</span>
                </li>
                <li className="flex items-center">
                  <div className="content_dot"></div>
                  <span>게시글 작성, 조회 및 수정 구현</span>
                </li>
                <li className="flex items-center">
                  <div className="content_dot"></div>
                  <span>북마크, 지원하기, 댓글, 마이페이지 구현</span>
                </li>
                <li className="flex items-center">
                  <div className="content_dot"></div>
                  <span>
                    Axios의 인스턴스 기능과 인터셉터를 활용하여 API 모듈화
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="content_dot"></div>
                  <span>TypeScript 도입으로 수월한 디버깅 가능</span>
                </li>
              </ul>
            </div>
            <div>
              <h4>저장소</h4>
              <div className="space-x-1">
                <span>👉</span>
                <a
                  href="https://github.com/hopak-e/seb39_main_014"
                  className="link_text"
                >
                  GitHub Repository 보러 가기
                </a>
              </div>
            </div>
            <div>
              <div
                className="flex items-center"
                onClick={() => setIsSoopoolImg(!isSoopoolImg)}
              >
                <h4
                  className={`${
                    isSoopoolImg ? "" : "link_text"
                  } cursor-pointer`}
                >
                  구현 이미지 보기
                </h4>
              </div>
              {isSoopoolImg && (
                <div className="grow shrink">
                  <p>각 이미지 클릭시 원본 크기로 보실 수 있습니다.</p>
                  <div className="grid grid-cols-2 gap-4 font-[500]">
                    <div className="border border-border-50 rounded-md p-1">
                      <img
                        src="https://hopak-e.github.io/Resume/img/soopool_sign_in.gif"
                        alt="회원가입 페이지"
                        className="w-full h-[200px]"
                        onClick={() =>
                          handleImgClick(
                            "https://hopak-e.github.io/Resume/img/soopool_sign_in.gif"
                          )
                        }
                      />
                      <p className="text-center">회원가입 페이지</p>
                    </div>
                    <div className="border border-border-50 rounded-md p-1">
                      <img
                        src="https://hopak-e.github.io/Resume/img/soopool_bulletin_board.gif"
                        alt="게시판 페이지"
                        className="w-full h-[200px]"
                        onClick={() =>
                          handleImgClick(
                            "https://hopak-e.github.io/Resume/img/soopool_bulletin_board.gif"
                          )
                        }
                      />
                      <p className="text-center">게시판 페이지</p>
                    </div>
                    <div className="border border-border-50 rounded-md p-1">
                      <img
                        src="https://hopak-e.github.io/Resume/img/soopool_write_post.gif"
                        alt="게시글 작성 페이지"
                        className="w-full h-[200px]"
                        onClick={() =>
                          handleImgClick(
                            "https://hopak-e.github.io/Resume/img/soopool_write_post.gif"
                          )
                        }
                      />
                      <p className="text-center">게시글 작성 페이지</p>
                    </div>
                    <div className="border border-border-50 rounded-md p-1">
                      <img
                        src="https://hopak-e.github.io/Resume/img/soopool_view_post.gif"
                        alt="게시글 조회 페이지"
                        className="w-full h-[200px]"
                        onClick={() =>
                          handleImgClick(
                            "https://hopak-e.github.io/Resume/img/soopool_view_post.gif"
                          )
                        }
                      />
                      <p className="text-center">게시글 조회 페이지</p>
                    </div>
                    <div className="border border-border-50 rounded-md p-1">
                      <img
                        src="https://hopak-e.github.io/Resume/img/soopool_edit_post.gif"
                        alt="게시글 수정 페이지"
                        className="w-full h-[200px]"
                        onClick={() =>
                          handleImgClick(
                            "https://hopak-e.github.io/Resume/img/soopool_edit_post.gif"
                          )
                        }
                      />
                      <p className="text-center">게시글 수정 페이지</p>
                    </div>
                    <div className="border border-border-50 rounded-md p-1">
                      <img
                        src="https://hopak-e.github.io/Resume/img/soopool_my_page.gif"
                        alt="마이 페이지"
                        className="w-full h-[200px]"
                        onClick={() =>
                          handleImgClick(
                            "https://hopak-e.github.io/Resume/img/soopool_my_page.gif"
                          )
                        }
                      />
                      <p className="text-center">마이 페이지</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </article>

        <section className="section space-y-4">
          <h3>Skills.</h3>
          <div className="grid grid-cols-[1fr_2fr]">
            <h4>Front-End</h4>
            <ul className="space-y-1">
              <li>HTML5</li>
              <li>CSS3 / Sass / TailwindCSS / styled-components</li>
              <li>JavaScript / TypeScript</li>
              <li>React / Redux</li>
            </ul>
          </div>
          <div className="grid grid-cols-[1fr_2fr]">
            <h4>Tools</h4>
            <ul className="space-y-1">
              <li>Git / GitHub / Figma</li>
              <li>Notion / Slack / Discord</li>
              <li>AWS / Vercel / Netlify</li>
            </ul>
          </div>
        </section>

        <section className="section space-y-4">
          <h3>Education.</h3>

          <article className="grid grid-cols-[1fr_2fr]">
            <div>
              <h4>원티드 프리온보딩 7차</h4>
              <p>2022.10 ~ 2022.11</p>
              <div>
                <span>👉 </span>
                <a
                  href="https://github.com/wanted-pre-onboarding-frontend-12team"
                  className="link_text"
                >
                  팀 깃허브
                </a>
              </div>
            </div>
            <div>
              <ul>
                <li className="flex items-center">
                  <span className="content_dot"></span>
                  <span>
                    동료들과 학습하고 5개의 기업 과제를 통해 실전 개발 역량 향상
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="content_dot"></span>
                  <span>React 렌더링 최적화와 관심사 분리 학습</span>
                </li>
                <li className="flex items-center">
                  <span className="content_dot"></span>
                  <span>
                    TypeScript, React-Query 동작원리와 사용 이유에 대한 이해
                  </span>
                </li>
              </ul>
            </div>
          </article>
          <article className="grid grid-cols-[1fr_2fr]">
            <div>
              <h4>코드스테이츠 39기</h4>
              <p>2022.04 ~ 2022.10</p>
            </div>
            <div>
              <ul>
                <li className="flex items-center">
                  <span className="content_dot"></span>
                  <span>HTML / CSS의 기초 문법을 이해하고 응용하여 학습</span>
                </li>
                <li className="flex items-center">
                  <span className="content_dot"></span>
                  <span>JavsScript 동작 원리에 대한 이해</span>
                </li>
                <li className="flex items-center">
                  <span className="content_dot"></span>
                  <span>
                    백엔드 / 프론트엔드 협업 팀 프로젝트 진행을 통해 개발 역량
                    향상
                  </span>
                </li>
              </ul>
            </div>
          </article>
          <article className="grid grid-cols-[1fr_2fr]">
            <div>
              <h4>인천대학교</h4>
              <p>2016.03 ~ 2022.02</p>
            </div>
            <div>
              <span className="content_dot"></span>
              <span>기계공학과 졸업</span>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}

export default App;
