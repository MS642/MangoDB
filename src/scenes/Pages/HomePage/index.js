import * as React from "react";
import "./LogoAnim.css";
import { LOGO_URL } from "assets/assets";
import Button from "react-bootstrap/Button";
import { useAuth } from "react-use-auth";

const HomePage = () => {
  return (
    <div className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 d-flex">
            <img src={LOGO_URL} width="800px" height="800px" alt="" />
          </div>
          <br />
          <br />
          <div className="col-xl-6 d-flex align-items-center">
            <span id="marketingAnim">
              <svg
                id="logoText"
                width="306"
                height="68"
                viewBox="0 0 306 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="path-1-outside-1"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="306"
                  height="68"
                  fill="none"
                >
                  <rect fill="white" width="306" height="68" />
                  <path d="M17.0388 6.55941C21.9556 6.55941 26.204 7.74588 29.7837 10.1188C33.4067 12.4366 36.167 15.7753 38.0647 20.1348C40.0056 24.4944 40.976 29.6266 40.976 35.5314C40.976 41.4361 40.0056 46.5683 38.0647 50.9279C36.167 55.2323 33.4067 58.5434 29.7837 60.8611C26.204 63.1237 21.9556 64.255 17.0388 64.255H3V6.55941H17.0388ZM17.0388 58.0467C22.8614 58.0467 27.3038 56.0877 30.366 52.1696C33.4282 48.1963 34.9594 42.6502 34.9594 35.5314C34.9594 28.3574 33.4067 22.7561 30.3013 18.7276C27.2391 14.6992 22.8182 12.6849 17.0388 12.6849H8.88725V58.0467H17.0388Z" />
                  <path d="M64.2035 65C60.8825 65 57.8634 64.0343 55.1462 62.1028C52.4722 60.1713 50.3588 57.4397 48.8061 53.9079C47.2966 50.3209 46.5418 46.182 46.5418 41.4913C46.5418 36.8558 47.3181 32.7721 48.8708 29.2403C50.4666 25.6533 52.6231 22.9217 55.3403 21.0454C58.0575 19.1139 61.0982 18.1482 64.4623 18.1482C67.8265 18.1482 70.8671 19.1139 73.5843 21.0454C76.3015 22.9217 78.4364 25.6257 79.9891 29.1575C81.5849 32.6894 82.3828 36.8006 82.3828 41.4913C82.3828 46.182 81.5634 50.3209 79.9244 53.9079C78.3286 57.4397 76.1506 60.1713 73.3902 62.1028C70.6299 64.0343 67.5677 65 64.2035 65ZM64.2035 58.3778C66.3169 58.3778 68.3009 57.7432 70.1555 56.474C72.0101 55.2047 73.4981 53.3008 74.6194 50.7623C75.7839 48.2238 76.3662 45.1335 76.3662 41.4913C76.3662 37.8491 75.8055 34.7588 74.6841 32.2203C73.5627 29.6818 72.0963 27.8055 70.2849 26.5915C68.4734 25.3222 66.511 24.6876 64.3976 24.6876C62.2411 24.6876 60.2571 25.3222 58.4457 26.5915C56.6773 27.8055 55.2541 29.6818 54.1758 32.2203C53.0976 34.7588 52.5584 37.8491 52.5584 41.4913C52.5584 45.1887 53.076 48.3066 54.1111 50.8451C55.1894 53.3836 56.6126 55.2875 58.381 56.5567C60.1493 57.7708 62.0902 58.3778 64.2035 58.3778Z" />
                  <path d="M124.282 23.2804C123.032 19.9141 121.22 17.3204 118.848 15.4993C116.476 13.623 113.716 12.6849 110.567 12.6849C107.419 12.6849 104.572 13.623 102.027 15.4993C99.5258 17.3204 97.5419 19.9693 96.0754 23.4459C94.6521 26.8674 93.9405 30.8407 93.9405 35.3658C93.9405 39.891 94.6521 43.8643 96.0754 47.2857C97.5419 50.7072 99.5258 53.356 102.027 55.2323C104.572 57.0534 107.419 57.9639 110.567 57.9639C114.966 57.9639 118.589 56.2808 121.436 52.9145C124.282 49.5483 125.943 44.9955 126.417 39.2563H108.432V33.1308H132.693V38.9252C132.348 43.6711 131.183 48.0307 129.199 52.004C127.215 55.9221 124.606 59.0401 121.371 61.3578C118.136 63.6204 114.535 64.7517 110.567 64.7517C106.384 64.7517 102.567 63.51 99.1161 61.0267C95.6657 58.4882 92.9269 54.984 90.8998 50.514C88.9159 46.0441 87.9239 40.9947 87.9239 35.3658C87.9239 29.737 88.9159 24.6876 90.8998 20.2176C92.9269 15.6925 95.6657 12.1882 99.1161 9.70494C102.567 7.16644 106.384 5.89719 110.567 5.89719C115.355 5.89719 119.581 7.41477 123.247 10.4499C126.957 13.4851 129.652 17.7619 131.334 23.2804H124.282Z" />
                  <path d="M172.824 39.8358C172.824 41.2706 172.76 42.7882 172.63 44.3885H144.294C144.51 48.8585 145.696 52.3627 147.852 54.9012C150.052 57.3845 152.704 58.6262 155.81 58.6262C158.354 58.6262 160.468 57.8812 162.15 56.3912C163.875 54.846 165.083 52.8042 165.773 50.2657H172.113C171.164 54.6253 169.266 58.1847 166.42 60.9439C163.573 63.648 160.036 65 155.81 65C152.446 65 149.426 64.0343 146.752 62.1028C144.121 60.1713 142.051 57.4397 140.542 53.9079C139.032 50.3209 138.277 46.182 138.277 41.4913C138.277 36.8006 139.011 32.6894 140.477 29.1575C141.943 25.6257 143.992 22.9217 146.623 21.0454C149.297 19.1139 152.359 18.1482 155.81 18.1482C159.174 18.1482 162.15 19.0863 164.738 20.9626C167.325 22.8389 169.309 25.4326 170.69 28.7437C172.113 31.9996 172.824 35.6969 172.824 39.8358ZM166.743 38.263C166.743 35.3934 166.247 32.9377 165.255 30.8959C164.263 28.7988 162.905 27.2261 161.179 26.1776C159.497 25.0739 157.621 24.522 155.551 24.522C152.575 24.522 150.03 25.7361 147.917 28.1642C145.847 30.5923 144.661 33.9586 144.359 38.263H166.743Z" />
                  <path d="M187.777 25.1015V51.8384C187.777 54.0458 188.143 55.6186 188.876 56.5567C189.61 57.4397 190.882 57.8812 192.693 57.8812H197.028V64.255H191.723C188.445 64.255 185.987 63.2893 184.348 61.3578C182.709 59.4263 181.889 56.2532 181.889 51.8384V25.1015H177.296V18.8932H181.889V7.46996H187.777V18.8932H197.028V25.1015H187.777Z" />
                  <path d="M221.758 18.0654C224.432 18.0654 226.848 18.8104 229.004 20.3004C231.161 21.7352 232.843 23.915 234.05 26.8398C235.301 29.7646 235.926 33.324 235.926 37.518V64.255H230.104V38.5941C230.104 34.069 229.22 30.6199 227.451 28.247C225.683 25.8189 223.268 24.6048 220.205 24.6048C217.1 24.6048 214.62 25.8465 212.766 28.3298C210.954 30.8131 210.048 34.4277 210.048 39.1736V64.255H204.161V3H210.048V25.3498C211.213 23.032 212.809 21.2385 214.836 19.9693C216.906 18.7 219.214 18.0654 221.758 18.0654Z" />
                  <path d="M277.891 39.8358C277.891 41.2706 277.826 42.7882 277.697 44.3885H249.36C249.576 48.8585 250.762 52.3627 252.918 54.9012C255.118 57.3845 257.771 58.6262 260.876 58.6262C263.421 58.6262 265.534 57.8812 267.216 56.3912C268.941 54.846 270.149 52.8042 270.839 50.2657H277.179C276.23 54.6253 274.333 58.1847 271.486 60.9439C268.639 63.648 265.103 65 260.876 65C257.512 65 254.493 64.0343 251.819 62.1028C249.188 60.1713 247.117 57.4397 245.608 53.9079C244.098 50.3209 243.344 46.182 243.344 41.4913C243.344 36.8006 244.077 32.6894 245.543 29.1575C247.01 25.6257 249.058 22.9217 251.689 21.0454C254.363 19.1139 257.426 18.1482 260.876 18.1482C264.24 18.1482 267.216 19.0863 269.804 20.9626C272.392 22.8389 274.376 25.4326 275.756 28.7437C277.179 31.9996 277.891 35.6969 277.891 39.8358ZM271.809 38.263C271.809 35.3934 271.313 32.9377 270.321 30.8959C269.329 28.7988 267.971 27.2261 266.246 26.1776C264.564 25.0739 262.687 24.522 260.617 24.522C257.641 24.522 255.097 25.7361 252.983 28.1642C250.913 30.5923 249.727 33.9586 249.425 38.263H271.809Z" />
                  <path d="M291.549 26.2603C292.584 23.6667 294.051 21.6524 295.948 20.2176C297.889 18.7828 300.24 18.0654 303 18.0654V25.8465H301.447C294.848 25.8465 291.549 30.4268 291.549 39.5874V64.255H285.662V18.8932H291.549V26.2603Z" />
                </mask>
                <path
                  d="M17.0388 6.55941C21.9556 6.55941 26.204 7.74588 29.7837 10.1188C33.4067 12.4366 36.167 15.7753 38.0647 20.1348C40.0056 24.4944 40.976 29.6266 40.976 35.5314C40.976 41.4361 40.0056 46.5683 38.0647 50.9279C36.167 55.2323 33.4067 58.5434 29.7837 60.8611C26.204 63.1237 21.9556 64.255 17.0388 64.255H3V6.55941H17.0388ZM17.0388 58.0467C22.8614 58.0467 27.3038 56.0877 30.366 52.1696C33.4282 48.1963 34.9594 42.6502 34.9594 35.5314C34.9594 28.3574 33.4067 22.7561 30.3013 18.7276C27.2391 14.6992 22.8182 12.6849 17.0388 12.6849H8.88725V58.0467H17.0388Z"
                  stroke="white"
                  strokeWidth="2"
                  mask="url(#path-1-outside-1)"
                />
                <path
                  d="M64.2035 65C60.8825 65 57.8634 64.0343 55.1462 62.1028C52.4722 60.1713 50.3588 57.4397 48.8061 53.9079C47.2966 50.3209 46.5418 46.182 46.5418 41.4913C46.5418 36.8558 47.3181 32.7721 48.8708 29.2403C50.4666 25.6533 52.6231 22.9217 55.3403 21.0454C58.0575 19.1139 61.0982 18.1482 64.4623 18.1482C67.8265 18.1482 70.8671 19.1139 73.5843 21.0454C76.3015 22.9217 78.4364 25.6257 79.9891 29.1575C81.5849 32.6894 82.3828 36.8006 82.3828 41.4913C82.3828 46.182 81.5634 50.3209 79.9244 53.9079C78.3286 57.4397 76.1506 60.1713 73.3902 62.1028C70.6299 64.0343 67.5677 65 64.2035 65ZM64.2035 58.3778C66.3169 58.3778 68.3009 57.7432 70.1555 56.474C72.0101 55.2047 73.4981 53.3008 74.6194 50.7623C75.7839 48.2238 76.3662 45.1335 76.3662 41.4913C76.3662 37.8491 75.8055 34.7588 74.6841 32.2203C73.5627 29.6818 72.0963 27.8055 70.2849 26.5915C68.4734 25.3222 66.511 24.6876 64.3976 24.6876C62.2411 24.6876 60.2571 25.3222 58.4457 26.5915C56.6773 27.8055 55.2541 29.6818 54.1758 32.2203C53.0976 34.7588 52.5584 37.8491 52.5584 41.4913C52.5584 45.1887 53.076 48.3066 54.1111 50.8451C55.1894 53.3836 56.6126 55.2875 58.381 56.5567C60.1493 57.7708 62.0902 58.3778 64.2035 58.3778Z"
                  stroke="white"
                  strokeWidth="2"
                  mask="url(#path-1-outside-1)"
                />
                <path
                  d="M124.282 23.2804C123.032 19.9141 121.22 17.3204 118.848 15.4993C116.476 13.623 113.716 12.6849 110.567 12.6849C107.419 12.6849 104.572 13.623 102.027 15.4993C99.5258 17.3204 97.5419 19.9693 96.0754 23.4459C94.6521 26.8674 93.9405 30.8407 93.9405 35.3658C93.9405 39.891 94.6521 43.8643 96.0754 47.2857C97.5419 50.7072 99.5258 53.356 102.027 55.2323C104.572 57.0534 107.419 57.9639 110.567 57.9639C114.966 57.9639 118.589 56.2808 121.436 52.9145C124.282 49.5483 125.943 44.9955 126.417 39.2563H108.432V33.1308H132.693V38.9252C132.348 43.6711 131.183 48.0307 129.199 52.004C127.215 55.9221 124.606 59.0401 121.371 61.3578C118.136 63.6204 114.535 64.7517 110.567 64.7517C106.384 64.7517 102.567 63.51 99.1161 61.0267C95.6657 58.4882 92.9269 54.984 90.8998 50.514C88.9159 46.0441 87.9239 40.9947 87.9239 35.3658C87.9239 29.737 88.9159 24.6876 90.8998 20.2176C92.9269 15.6925 95.6657 12.1882 99.1161 9.70494C102.567 7.16644 106.384 5.89719 110.567 5.89719C115.355 5.89719 119.581 7.41477 123.247 10.4499C126.957 13.4851 129.652 17.7619 131.334 23.2804H124.282Z"
                  stroke="white"
                  strokeWidth="2"
                  mask="url(#path-1-outside-1)"
                />
                <path
                  d="M172.824 39.8358C172.824 41.2706 172.76 42.7882 172.63 44.3885H144.294C144.51 48.8585 145.696 52.3627 147.852 54.9012C150.052 57.3845 152.704 58.6262 155.81 58.6262C158.354 58.6262 160.468 57.8812 162.15 56.3912C163.875 54.846 165.083 52.8042 165.773 50.2657H172.113C171.164 54.6253 169.266 58.1847 166.42 60.9439C163.573 63.648 160.036 65 155.81 65C152.446 65 149.426 64.0343 146.752 62.1028C144.121 60.1713 142.051 57.4397 140.542 53.9079C139.032 50.3209 138.277 46.182 138.277 41.4913C138.277 36.8006 139.011 32.6894 140.477 29.1575C141.943 25.6257 143.992 22.9217 146.623 21.0454C149.297 19.1139 152.359 18.1482 155.81 18.1482C159.174 18.1482 162.15 19.0863 164.738 20.9626C167.325 22.8389 169.309 25.4326 170.69 28.7437C172.113 31.9996 172.824 35.6969 172.824 39.8358ZM166.743 38.263C166.743 35.3934 166.247 32.9377 165.255 30.8959C164.263 28.7988 162.905 27.2261 161.179 26.1776C159.497 25.0739 157.621 24.522 155.551 24.522C152.575 24.522 150.03 25.7361 147.917 28.1642C145.847 30.5923 144.661 33.9586 144.359 38.263H166.743Z"
                  stroke="white"
                  strokeWidth="2"
                  mask="url(#path-1-outside-1)"
                />
                <path
                  d="M187.777 25.1015V51.8384C187.777 54.0458 188.143 55.6186 188.876 56.5567C189.61 57.4397 190.882 57.8812 192.693 57.8812H197.028V64.255H191.723C188.445 64.255 185.987 63.2893 184.348 61.3578C182.709 59.4263 181.889 56.2532 181.889 51.8384V25.1015H177.296V18.8932H181.889V7.46996H187.777V18.8932H197.028V25.1015H187.777Z"
                  stroke="white"
                  strokeWidth="2"
                  mask="url(#path-1-outside-1)"
                />
                <path
                  d="M221.758 18.0654C224.432 18.0654 226.848 18.8104 229.004 20.3004C231.161 21.7352 232.843 23.915 234.05 26.8398C235.301 29.7646 235.926 33.324 235.926 37.518V64.255H230.104V38.5941C230.104 34.069 229.22 30.6199 227.451 28.247C225.683 25.8189 223.268 24.6048 220.205 24.6048C217.1 24.6048 214.62 25.8465 212.766 28.3298C210.954 30.8131 210.048 34.4277 210.048 39.1736V64.255H204.161V3H210.048V25.3498C211.213 23.032 212.809 21.2385 214.836 19.9693C216.906 18.7 219.214 18.0654 221.758 18.0654Z"
                  stroke="white"
                  strokeWidth="2"
                  mask="url(#path-1-outside-1)"
                />
                <path
                  d="M277.891 39.8358C277.891 41.2706 277.826 42.7882 277.697 44.3885H249.36C249.576 48.8585 250.762 52.3627 252.918 54.9012C255.118 57.3845 257.771 58.6262 260.876 58.6262C263.421 58.6262 265.534 57.8812 267.216 56.3912C268.941 54.846 270.149 52.8042 270.839 50.2657H277.179C276.23 54.6253 274.333 58.1847 271.486 60.9439C268.639 63.648 265.103 65 260.876 65C257.512 65 254.493 64.0343 251.819 62.1028C249.188 60.1713 247.117 57.4397 245.608 53.9079C244.098 50.3209 243.344 46.182 243.344 41.4913C243.344 36.8006 244.077 32.6894 245.543 29.1575C247.01 25.6257 249.058 22.9217 251.689 21.0454C254.363 19.1139 257.426 18.1482 260.876 18.1482C264.24 18.1482 267.216 19.0863 269.804 20.9626C272.392 22.8389 274.376 25.4326 275.756 28.7437C277.179 31.9996 277.891 35.6969 277.891 39.8358ZM271.809 38.263C271.809 35.3934 271.313 32.9377 270.321 30.8959C269.329 28.7988 267.971 27.2261 266.246 26.1776C264.564 25.0739 262.687 24.522 260.617 24.522C257.641 24.522 255.097 25.7361 252.983 28.1642C250.913 30.5923 249.727 33.9586 249.425 38.263H271.809Z"
                  stroke="white"
                  strokeWidth="2"
                  mask="url(#path-1-outside-1)"
                />
                <path
                  d="M291.549 26.2603C292.584 23.6667 294.051 21.6524 295.948 20.2176C297.889 18.7828 300.24 18.0654 303 18.0654V25.8465H301.447C294.848 25.8465 291.549 30.4268 291.549 39.5874V64.255H285.662V18.8932H291.549V26.2603Z"
                  stroke="white"
                  strokeWidth="2"
                  mask="url(#path-1-outside-1)"
                />
              </svg>

              <div className="text-white">
                <h3>
                  <span id="motto1">/dəˈɡeT͟Hər/</span>
                </h3>
              </div>
              <div className="philosophy text-light">
                <hr id="mottoDiv" />
                <br />
                <h4>
                  <i>noun</i>
                </h4>
                <p>
                  1. &nbsp;a social task management app that helps users
                  motivate users.
                  <br />
                  <span className="grey-text">
                    &nbsp;&nbsp;&nbsp;&nbsp;&quot;Do more together with
                    DoGether!&quot;
                  </span>
                </p>
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="text-center">
        <LoginButton />
      </div>
    </div>
  );
};

const LoginButton = () => {
  const { isAuthenticated, login } = useAuth();

  if (!isAuthenticated()) {
    return (
      <Button className="btn-primary btn-lg" onClick={login}>
        Let&apos;s Start
      </Button>
    );
  }
  return null;
};

export default HomePage;
