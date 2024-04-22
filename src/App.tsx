import "./App.css";

function App() {
  const handleImgClick = (src: string) => {
    window.open(src);
  };

  return (
    <main className="grow shrink bg-white max-w-[680px] mx-auto text-[12px] sm:text-[14px]">
      <div className="flex flex-col wrap  p-10">
        <h1 className="flex flex-col">
          <span className="text-[36px]">안녕하세요!</span>
          <span>
            사용자를 먼저 생각하는 개발자,
            <span className="bg-gradient-to-r from-bg-50 to-bg-100 text-white">
              박상호
            </span>
            입니다.
          </span>
        </h1>
        <div className="flex justify-center py-10">
          <img
            src="/img/park_sang_ho.jpg"
            alt="sangho"
            className="w-[260px] rounded-md"
          />
        </div>

        <section className="section">
          <h2>CONTACT.</h2>
          <div className="mt-3 space-y-2">
            <div className="space-x-3">
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
            <div className="space-x-3">
              <span className="text-[20px] font-[600] tracking-tight">
                GitHub.
              </span>
              <a href="https://github.com/hopak-e" className="link_text">
                https://github.com/hopak-e
              </a>
            </div>
            <div className="space-x-3">
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
          <h2>INTRODUCTION.</h2>
          <div>
            <p className="font-[500]">
              ‘함께 학습하며 성장하자’라는 모토를 갖고 개발 스터디 활동에
              적극적으로 임하고 있습니다.
            </p>
            <p>
              빠르게 성장하기 위해 코드를 작성할 때도 항상 이유를 생각하고,
              기초가 되는 지식의 올바른 학습을 추구합니다.
            </p>
            <p>
              기록의 가치가 얼마나 중요한지 느끼고, 학습한 내용과 회고를
              블로그에 꾸준히 기록하는 중입니다.
            </p>
          </div>
        </section>

        <section className="section">
          <h2>PROJECTS.</h2>
          <article className="flex flex-col gap-y-1 mt-4">
            <h3>메이플스토리 유저정보를 한눈에, MapleInfo</h3>
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
            <div className="mt-4 space-y-2">
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
                  상세한 정보와 큐브, 스타포스의 히스토리 API가 공개되면서
                  자신이 어떤 아이템에 많은 재화를 소모했는지 알 수 있게되었고,
                  이를 웹 사이트로 보기 쉽게 하고자 기획한 프로젝트 입니다.
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
                <h4>구현 이미지</h4>
                <div className="grow shrink">
                  <p>각 이미지 클릭시 원본 크기로 보실 수 있습니다.</p>
                  <div className="grid grid-cols-2 gap-4 font-[500]">
                    <div>
                      <img
                        src="/img/mapleinfo_main.gif"
                        alt="메인 페이지"
                        className="w-full h-[200px]"
                        onClick={() =>
                          handleImgClick("/img/mapleinfo_main.gif")
                        }
                      />
                      <p className="text-center">메인 페이지</p>
                    </div>
                    <div>
                      <img
                        src="/img/mapleinfo_user_data.gif"
                        alt="유저 페이지"
                        className="w-full h-[200px]"
                        onClick={() =>
                          handleImgClick("/img/mapleinfo_user_data.gif")
                        }
                      />
                      <p className="text-center">유저 페이지</p>
                    </div>
                    <div>
                      <img
                        src="/img/mapleinfo_guild.gif"
                        alt="길드 페이지"
                        className="w-full h-[200px]"
                        onClick={() =>
                          handleImgClick("/img/mapleinfo_guild.gif")
                        }
                      />
                      <p className="text-center">길드 페이지</p>
                    </div>
                    <div>
                      <img
                        src="/img/mapleinfo_cube.gif"
                        alt="큐브 페이지"
                        className="w-full h-[200px]"
                        onClick={() =>
                          handleImgClick("/img/mapleinfo_cube.gif")
                        }
                      />
                      <p className="text-center">큐브 페이지</p>
                    </div>
                    <div>
                      <img
                        src="/img/mapleinfo_starforce.gif"
                        alt="스타포스 페이지"
                        className="w-full h-[200px]"
                        onClick={() =>
                          handleImgClick("/img/mapleinfo_starforce.gif")
                        }
                      />
                      <p className="text-center">스타포스 페이지</p>
                    </div>
                    <div>
                      <img
                        src="/img/mapleinfo_track_char.gif"
                        alt="본캐 추적 페이지"
                        className="w-full h-[200px]"
                        onClick={() =>
                          handleImgClick("/img/mapleinfo_track_char.gif")
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
          <p className="font-[500]">2022.09 ~ 2022.10</p>
          <div className="flex items-center gap-2">
            <div className="stack">React</div>
            <div className="stack">TypeScript</div>
            <div className="stack">React-query</div>
            <div className="stack">Tailwind CSS</div>
          </div>
          <div className="mt-4 space-y-2">
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
              <p className="project_content">&nbsp;하이요</p>
            </div>
            <div>
              <h4>주요 기능</h4>
              <p>&nbsp;하이요</p>
            </div>
            <div>
              <h4>개요</h4>
              <p>&nbsp;하이요</p>
            </div>
            <div>
              <h4>저장소</h4>
              <div className="space-x-1">
                <span>👉</span>
                <a
                  href="https://github.com/hopak-e/MapleInfo"
                  className="link_text"
                >
                  GitHub Repository 보러 가기
                </a>
              </div>
            </div>
            <div>
              <h4>구현 이미지</h4>
              <div className="grow shrink">
                <p>각 이미지 클릭시 원본 크기로 보실 수 있습니다.</p>
                <div className="grid grid-cols-2 gap-4 font-[500]">
                  <div>
                    <img
                      src="/img/soopool_sign_in.gif"
                      alt="회원가입 페이지"
                      className="w-full h-[200px]"
                      onClick={() => handleImgClick("/img/soopool_sign_in.gif")}
                    />
                    <p className="text-center">회원가입 페이지</p>
                  </div>
                  <div>
                    <img
                      src="/img/soopool_bulletin_board.gif"
                      alt="게시판 페이지"
                      className="w-full h-[200px]"
                      onClick={() =>
                        handleImgClick("/img/soopool_bulletin_board.gif")
                      }
                    />
                    <p className="text-center">게시판 페이지</p>
                  </div>
                  <div>
                    <img
                      src="/img/soopool_write_post.gif"
                      alt="게시글 작성 페이지"
                      className="w-full h-[200px]"
                      onClick={() =>
                        handleImgClick("/img/soopool_write_post.gif")
                      }
                    />
                    <p className="text-center">게시글 작성 페이지</p>
                  </div>
                  <div>
                    <img
                      src="/img/soopool_view_post.gif"
                      alt="게시글 조회 페이지"
                      className="w-full h-[200px]"
                      onClick={() =>
                        handleImgClick("/img/soopool_view_post.gif")
                      }
                    />
                    <p className="text-center">게시글 조회 페이지</p>
                  </div>
                  <div>
                    <img
                      src="/img/soopool_edit_post.gif"
                      alt="게시글 수정 페이지"
                      className="w-full h-[200px]"
                      onClick={() =>
                        handleImgClick("/img/mapleinfo_starforce.gif")
                      }
                    />
                    <p className="text-center">게시글 수정 페이지</p>
                  </div>
                  <div>
                    <img
                      src="/img/soopool_my_page.gif"
                      alt="마이 페이지"
                      className="w-full h-[200px]"
                      onClick={() => handleImgClick("/img/soopool_my_page.gif")}
                    />
                    <p className="text-center">마이 페이지</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <section className="section">
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
          <div className="grid grid-cols-[1fr_2fr] mt-3">
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
                  <div className="content_dot"></div>
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
            <p>기계공학과 졸업</p>
          </article>
        </section>
      </div>
    </main>
  );
}

export default App;
