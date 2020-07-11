import * as React from "react";
import "./LogoAnim.css";
import Button from "react-bootstrap/Button";
import { useAuth } from "react-use-auth";

const HomePage = () => {
  return (
    <div className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 d-flex">
            <img src="potato_mango.png" width="800px" height="800px" alt="" />
          </div>
          <div className="col-xl-6 d-flex align-items-center">
            <span id="marketingAnim">
              <svg
                id="logoText"
                width="506"
                height="85"
                viewBox="0 0 506 85"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="path-1-outside-1"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="506"
                  height="85"
                  fill="none"
                >
                  <rect fill="white" width="506" height="85" />
                  <path d="M26.398 7.53538C34.5927 7.53538 41.6733 9.04717 47.6396 12.0708C53.6778 15.024 58.2783 19.2781 61.4412 24.8331C64.6759 30.3881 66.2933 36.9275 66.2933 44.4513C66.2933 51.9751 64.6759 58.5145 61.4412 64.0694C58.2783 69.5541 53.6778 73.773 47.6396 76.7263C41.6733 79.6092 34.5927 81.0507 26.398 81.0507H3V7.53538H26.398ZM26.398 73.1402C36.1023 73.1402 43.5063 70.644 48.61 65.6515C53.7137 60.5888 56.2656 53.522 56.2656 44.4513C56.2656 35.3102 53.6778 28.1731 48.5022 23.0401C43.3985 17.907 36.0304 15.3405 26.398 15.3405H12.8121V73.1402H26.398Z" />
                  <path d="M105.006 82C99.4709 82 94.439 80.7695 89.9104 78.3084C85.4536 75.8473 81.9313 72.3667 79.3435 67.8665C76.8276 63.2959 75.5696 58.0223 75.5696 52.0454C75.5696 46.1389 76.8635 40.9355 79.4513 36.4352C82.111 31.8647 85.7052 28.3841 90.2339 25.9933C94.7625 23.5323 99.8303 22.3017 105.437 22.3017C111.044 22.3017 116.112 23.5323 120.641 25.9933C125.169 28.3841 128.727 31.8295 131.315 36.3298C133.975 40.83 135.305 46.0685 135.305 52.0454C135.305 58.0223 133.939 63.2959 131.207 67.8665C128.548 72.3667 124.918 75.8473 120.317 78.3084C115.717 80.7695 110.613 82 105.006 82ZM105.006 73.5621C108.528 73.5621 111.835 72.7534 114.926 71.1362C118.017 69.5189 120.497 67.093 122.366 63.8585C124.307 60.6239 125.277 56.6863 125.277 52.0454C125.277 47.4045 124.343 43.4668 122.474 40.2323C120.605 36.9978 118.161 34.607 115.141 33.0601C112.122 31.4428 108.852 30.6342 105.329 30.6342C101.735 30.6342 98.4286 31.4428 95.4095 33.0601C92.4622 34.607 90.0901 36.9978 88.293 40.2323C86.4959 43.4668 85.5974 47.4045 85.5974 52.0454C85.5974 56.7566 86.46 60.7294 88.1852 63.9639C89.9823 67.1985 92.3544 69.6244 95.3016 71.2417C98.2489 72.7886 101.484 73.5621 105.006 73.5621Z" />
                  <path d="M205.137 28.8411C203.053 24.5518 200.034 21.247 196.08 18.9266C192.127 16.5358 187.526 15.3405 182.279 15.3405C177.031 15.3405 172.287 16.5358 168.046 18.9266C163.876 21.247 160.57 24.6222 158.126 29.0521C155.754 33.4117 154.568 38.4744 154.568 44.2403C154.568 50.0062 155.754 55.069 158.126 59.4286C160.57 63.7882 163.876 67.1633 168.046 69.5541C172.287 71.8745 177.031 73.0347 182.279 73.0347C189.611 73.0347 195.649 70.8901 200.393 66.6008C205.137 62.3115 207.905 56.5105 208.696 49.1976H178.72V41.3925H219.155V48.7757C218.58 54.8229 216.639 60.3778 213.332 65.4406C210.026 70.433 205.677 74.4059 200.285 77.3591C194.894 80.2421 188.892 81.6836 182.279 81.6836C175.306 81.6836 168.944 80.1015 163.194 76.9372C157.443 73.7027 152.878 69.2376 149.5 63.542C146.193 57.8465 144.54 51.4125 144.54 44.2403C144.54 37.0681 146.193 30.6342 149.5 24.9386C152.878 19.1727 157.443 14.7076 163.194 11.5434C168.944 8.30885 175.306 6.69159 182.279 6.69159C190.258 6.69159 197.302 8.62527 203.412 12.4927C209.594 16.36 214.087 21.8095 216.89 28.8411H205.137Z" />
                  <path d="M286.041 49.9359C286.041 51.7641 285.933 53.6978 285.717 55.737H238.49C238.849 61.4326 240.826 65.8976 244.42 69.1322C248.086 72.2964 252.507 73.8785 257.683 73.8785C261.924 73.8785 265.446 72.9292 268.25 71.0307C271.125 69.0618 273.138 66.4602 274.288 63.2256H284.855C283.273 68.7806 280.11 73.316 275.366 76.8318C270.622 80.2773 264.727 82 257.683 82C252.076 82 247.044 80.7695 242.587 78.3084C238.202 75.8473 234.752 72.3667 232.236 67.8665C229.72 63.2959 228.462 58.0223 228.462 52.0454C228.462 46.0685 229.684 40.83 232.128 36.3298C234.572 31.8295 237.987 28.3841 242.372 25.9933C246.828 23.5323 251.932 22.3017 257.683 22.3017C263.29 22.3017 268.25 23.4971 272.563 25.8879C276.876 28.2786 280.182 31.5834 282.483 35.8024C284.855 39.951 286.041 44.6622 286.041 49.9359ZM275.905 47.9319C275.905 44.2755 275.079 41.1464 273.425 38.5447C271.772 35.8727 269.508 33.8687 266.632 32.5327C263.829 31.1264 260.702 30.4232 257.252 30.4232C252.292 30.4232 248.05 31.9702 244.528 35.0641C241.078 38.158 239.101 42.4473 238.598 47.9319H275.905Z" />
                  <path d="M310.961 31.1615V65.2296C310.961 68.0423 311.572 70.0463 312.794 71.2417C314.016 72.3667 316.137 72.9292 319.156 72.9292H326.38V81.0507H317.538C312.075 81.0507 307.978 79.8202 305.246 77.3591C302.515 74.8981 301.149 70.8549 301.149 65.2296V31.1615H293.493V23.251H301.149V8.69559H310.961V23.251H326.38V31.1615H310.961Z" />
                  <path d="M367.597 22.1963C372.054 22.1963 376.079 23.1455 379.673 25.0441C383.268 26.8723 386.071 29.6498 388.084 33.3765C390.168 37.1032 391.211 41.6386 391.211 46.9826V81.0507H381.506V48.3538C381.506 42.5879 380.033 38.1931 377.086 35.1696C374.138 32.0757 370.113 30.5287 365.009 30.5287C359.834 30.5287 355.7 32.1108 352.609 35.275C349.59 38.4392 348.081 43.0449 348.081 49.0921V81.0507H338.269V3H348.081V31.478C350.022 28.5247 352.681 26.2394 356.06 24.6222C359.51 23.0049 363.356 22.1963 367.597 22.1963Z" />
                  <path d="M461.151 49.9359C461.151 51.7641 461.043 53.6978 460.828 55.737H413.6C413.96 61.4326 415.937 65.8976 419.531 69.1322C423.197 72.2964 427.618 73.8785 432.793 73.8785C437.034 73.8785 440.557 72.9292 443.36 71.0307C446.235 69.0618 448.248 66.4602 449.398 63.2256H459.965C458.384 68.7806 455.221 73.316 450.477 76.8318C445.732 80.2773 439.838 82 432.793 82C427.186 82 422.155 80.7695 417.698 78.3084C413.313 75.8473 409.862 72.3667 407.347 67.8665C404.831 63.2959 403.573 58.0223 403.573 52.0454C403.573 46.0685 404.795 40.83 407.239 36.3298C409.683 31.8295 413.097 28.3841 417.482 25.9933C421.939 23.5323 427.043 22.3017 432.793 22.3017C438.4 22.3017 443.36 23.4971 447.673 25.8879C451.986 28.2786 455.293 31.5834 457.593 35.8024C459.965 39.951 461.151 44.6622 461.151 49.9359ZM451.016 47.9319C451.016 44.2755 450.189 41.1464 448.536 38.5447C446.882 35.8727 444.618 33.8687 441.743 32.5327C438.939 31.1264 435.812 30.4232 432.362 30.4232C427.402 30.4232 423.161 31.9702 419.639 35.0641C416.188 38.158 414.211 42.4473 413.708 47.9319H451.016Z" />
                  <path d="M483.915 32.6382C485.64 29.3333 488.084 26.7668 491.247 24.9386C494.482 23.1104 498.399 22.1963 503 22.1963V32.1108H500.412C489.414 32.1108 483.915 37.947 483.915 49.6195V81.0507H474.103V23.251H483.915V32.6382Z" />
                </mask>
                <path
                  d="M26.398 7.53538C34.5927 7.53538 41.6733 9.04717 47.6396 12.0708C53.6778 15.024 58.2783 19.2781 61.4412 24.8331C64.6759 30.3881 66.2933 36.9275 66.2933 44.4513C66.2933 51.9751 64.6759 58.5145 61.4412 64.0694C58.2783 69.5541 53.6778 73.773 47.6396 76.7263C41.6733 79.6092 34.5927 81.0507 26.398 81.0507H3V7.53538H26.398ZM26.398 73.1402C36.1023 73.1402 43.5063 70.644 48.61 65.6515C53.7137 60.5888 56.2656 53.522 56.2656 44.4513C56.2656 35.3102 53.6778 28.1731 48.5022 23.0401C43.3985 17.907 36.0304 15.3405 26.398 15.3405H12.8121V73.1402H26.398Z"
                  stroke="white"
                  strokeWidth="2"
                  mask="url(#path-1-outside-1)"
                />
                <path
                  d="M105.006 82C99.4709 82 94.439 80.7695 89.9104 78.3084C85.4536 75.8473 81.9313 72.3667 79.3435 67.8665C76.8276 63.2959 75.5696 58.0223 75.5696 52.0454C75.5696 46.1389 76.8635 40.9355 79.4513 36.4352C82.111 31.8647 85.7052 28.3841 90.2339 25.9933C94.7625 23.5323 99.8303 22.3017 105.437 22.3017C111.044 22.3017 116.112 23.5323 120.641 25.9933C125.169 28.3841 128.727 31.8295 131.315 36.3298C133.975 40.83 135.305 46.0685 135.305 52.0454C135.305 58.0223 133.939 63.2959 131.207 67.8665C128.548 72.3667 124.918 75.8473 120.317 78.3084C115.717 80.7695 110.613 82 105.006 82ZM105.006 73.5621C108.528 73.5621 111.835 72.7534 114.926 71.1362C118.017 69.5189 120.497 67.093 122.366 63.8585C124.307 60.6239 125.277 56.6863 125.277 52.0454C125.277 47.4045 124.343 43.4668 122.474 40.2323C120.605 36.9978 118.161 34.607 115.141 33.0601C112.122 31.4428 108.852 30.6342 105.329 30.6342C101.735 30.6342 98.4286 31.4428 95.4095 33.0601C92.4622 34.607 90.0901 36.9978 88.293 40.2323C86.4959 43.4668 85.5974 47.4045 85.5974 52.0454C85.5974 56.7566 86.46 60.7294 88.1852 63.9639C89.9823 67.1985 92.3544 69.6244 95.3016 71.2417C98.2489 72.7886 101.484 73.5621 105.006 73.5621Z"
                  stroke="white"
                  strokeWidth="2"
                  mask="url(#path-1-outside-1)"
                />
                <path
                  d="M205.137 28.8411C203.053 24.5518 200.034 21.247 196.08 18.9266C192.127 16.5358 187.526 15.3405 182.279 15.3405C177.031 15.3405 172.287 16.5358 168.046 18.9266C163.876 21.247 160.57 24.6222 158.126 29.0521C155.754 33.4117 154.568 38.4744 154.568 44.2403C154.568 50.0062 155.754 55.069 158.126 59.4286C160.57 63.7882 163.876 67.1633 168.046 69.5541C172.287 71.8745 177.031 73.0347 182.279 73.0347C189.611 73.0347 195.649 70.8901 200.393 66.6008C205.137 62.3115 207.905 56.5105 208.696 49.1976H178.72V41.3925H219.155V48.7757C218.58 54.8229 216.639 60.3778 213.332 65.4406C210.026 70.433 205.677 74.4059 200.285 77.3591C194.894 80.2421 188.892 81.6836 182.279 81.6836C175.306 81.6836 168.944 80.1015 163.194 76.9372C157.443 73.7027 152.878 69.2376 149.5 63.542C146.193 57.8465 144.54 51.4125 144.54 44.2403C144.54 37.0681 146.193 30.6342 149.5 24.9386C152.878 19.1727 157.443 14.7076 163.194 11.5434C168.944 8.30885 175.306 6.69159 182.279 6.69159C190.258 6.69159 197.302 8.62527 203.412 12.4927C209.594 16.36 214.087 21.8095 216.89 28.8411H205.137Z"
                  stroke="white"
                  strokeWidth="2"
                  mask="url(#path-1-outside-1)"
                />
                <path
                  d="M286.041 49.9359C286.041 51.7641 285.933 53.6978 285.717 55.737H238.49C238.849 61.4326 240.826 65.8976 244.42 69.1322C248.086 72.2964 252.507 73.8785 257.683 73.8785C261.924 73.8785 265.446 72.9292 268.25 71.0307C271.125 69.0618 273.138 66.4602 274.288 63.2256H284.855C283.273 68.7806 280.11 73.316 275.366 76.8318C270.622 80.2773 264.727 82 257.683 82C252.076 82 247.044 80.7695 242.587 78.3084C238.202 75.8473 234.752 72.3667 232.236 67.8665C229.72 63.2959 228.462 58.0223 228.462 52.0454C228.462 46.0685 229.684 40.83 232.128 36.3298C234.572 31.8295 237.987 28.3841 242.372 25.9933C246.828 23.5323 251.932 22.3017 257.683 22.3017C263.29 22.3017 268.25 23.4971 272.563 25.8879C276.876 28.2786 280.182 31.5834 282.483 35.8024C284.855 39.951 286.041 44.6622 286.041 49.9359ZM275.905 47.9319C275.905 44.2755 275.079 41.1464 273.425 38.5447C271.772 35.8727 269.508 33.8687 266.632 32.5327C263.829 31.1264 260.702 30.4232 257.252 30.4232C252.292 30.4232 248.05 31.9702 244.528 35.0641C241.078 38.158 239.101 42.4473 238.598 47.9319H275.905Z"
                  stroke="white"
                  strokeWidth="2"
                  mask="url(#path-1-outside-1)"
                />
                <path
                  d="M310.961 31.1615V65.2296C310.961 68.0423 311.572 70.0463 312.794 71.2417C314.016 72.3667 316.137 72.9292 319.156 72.9292H326.38V81.0507H317.538C312.075 81.0507 307.978 79.8202 305.246 77.3591C302.515 74.8981 301.149 70.8549 301.149 65.2296V31.1615H293.493V23.251H301.149V8.69559H310.961V23.251H326.38V31.1615H310.961Z"
                  stroke="white"
                  strokeWidth="2"
                  mask="url(#path-1-outside-1)"
                />
                <path
                  d="M367.597 22.1963C372.054 22.1963 376.079 23.1455 379.673 25.0441C383.268 26.8723 386.071 29.6498 388.084 33.3765C390.168 37.1032 391.211 41.6386 391.211 46.9826V81.0507H381.506V48.3538C381.506 42.5879 380.033 38.1931 377.086 35.1696C374.138 32.0757 370.113 30.5287 365.009 30.5287C359.834 30.5287 355.7 32.1108 352.609 35.275C349.59 38.4392 348.081 43.0449 348.081 49.0921V81.0507H338.269V3H348.081V31.478C350.022 28.5247 352.681 26.2394 356.06 24.6222C359.51 23.0049 363.356 22.1963 367.597 22.1963Z"
                  stroke="white"
                  strokeWidth="2"
                  mask="url(#path-1-outside-1)"
                />
                <path
                  d="M461.151 49.9359C461.151 51.7641 461.043 53.6978 460.828 55.737H413.6C413.96 61.4326 415.937 65.8976 419.531 69.1322C423.197 72.2964 427.618 73.8785 432.793 73.8785C437.034 73.8785 440.557 72.9292 443.36 71.0307C446.235 69.0618 448.248 66.4602 449.398 63.2256H459.965C458.384 68.7806 455.221 73.316 450.477 76.8318C445.732 80.2773 439.838 82 432.793 82C427.186 82 422.155 80.7695 417.698 78.3084C413.313 75.8473 409.862 72.3667 407.347 67.8665C404.831 63.2959 403.573 58.0223 403.573 52.0454C403.573 46.0685 404.795 40.83 407.239 36.3298C409.683 31.8295 413.097 28.3841 417.482 25.9933C421.939 23.5323 427.043 22.3017 432.793 22.3017C438.4 22.3017 443.36 23.4971 447.673 25.8879C451.986 28.2786 455.293 31.5834 457.593 35.8024C459.965 39.951 461.151 44.6622 461.151 49.9359ZM451.016 47.9319C451.016 44.2755 450.189 41.1464 448.536 38.5447C446.882 35.8727 444.618 33.8687 441.743 32.5327C438.939 31.1264 435.812 30.4232 432.362 30.4232C427.402 30.4232 423.161 31.9702 419.639 35.0641C416.188 38.158 414.211 42.4473 413.708 47.9319H451.016Z"
                  stroke="white"
                  strokeWidth="2"
                  mask="url(#path-1-outside-1)"
                />
                <path
                  d="M483.915 32.6382C485.64 29.3333 488.084 26.7668 491.247 24.9386C494.482 23.1104 498.399 22.1963 503 22.1963V32.1108H500.412C489.414 32.1108 483.915 37.947 483.915 49.6195V81.0507H474.103V23.251H483.915V32.6382Z"
                  stroke="white"
                  strokeWidth="2"
                  mask="url(#path-1-outside-1)"
                />
              </svg>
              <div className="text-white">
                <h3>
                  <span id="motto1">Do more,</span>
                  <span id="motto2"> together.</span>
                </h3>
              </div>
              <div className="philosophy text-light">
                <hr id="mottoDiv" />
                <br />
                <br />
                <br />
                <h4>Our Philosophy:</h4>
                <p>
                  Insert something witty here. Here at MangoDB we are obsessed
                  with mangos if you haven&apos;t noticed...
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
