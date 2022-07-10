# web-baemin-kimsuhwan

### Vanila js, Express를 이용한 배달의 민족 로그인, 회원가입 구현

프로젝트 기간 : 2022.07.05 ~ 2022.07.08
배포 사이트 : https://web-baemin-kimsuhwan.herokuapp.com/

키워드

- Vanila Javascript, HTML, PUG, CSS
- Node.js
- express, express-session, path, a1-database

## 화면 별 요구사항

기획서 : https://docs.google.com/presentation/d/17XVTh2VGtfiQC97engoZdvKKaUS4X7KchWZfT_o79Vg/edit#slide=id.p

### 초기화면

- [x] 특정 부분 클릭 시, 로그인 페이지 이동 기능(페이지 레이아웃은 기획서와 동일해야 함!)
- [x] 기획서와 UI는 비슷하게 만드나, 로그인 페이지 이동 기능 외에는 동작 가능한 기능 없음.
- [x] 로그인 세션이 유지 중일때는, 로그인 버튼을 눌러도 로그인 페이지로 이동하면 안 됨.

### 로그인 화면

- [x] 입력칸에 아이디 또는 이메일, 비밀번호 입력가능
- [x] 로그인 버튼을 누르면 로그인 처리를 진행
- [x] 아이디, 비밀번호 칸 중 빈 칸이 존재하면 빨간 색 경고메시지 시각화
- [ ] 틀린 아이디 비밀번호를 입력했을 때에도 경고 메시지가 떠야됨.
- [x] 회원가입 버튼을 누르면 회원가입 페이지로 이동
- [x] 마찬가지로, 입력칸 2개, 로그인 버튼, 회원가입 버튼을 제외하고는 동작 가능한 기능 없음.

### 가입-약관동의 화면

- [x] 필수 선택항목과, 일반 선택항목이 존재하며, 체크 선택 및 해제 가능.
- [x] 필수 선택항목이 다 체킹, 나이 라디오 박스가 다 체킹이 되야 "다음으로" 버튼 활성화
- [x] 전체동의 버튼 클릭 시, 필수 선택항목, 일반 선택항목 전부 다 체킹됨.
- [x] 나이 체킹 박스의 경우 라디오 버튼으로 구현. 둘 중 하나만 체킹됨.
- [x] 다음으로 버튼을 누르면 다음 페이지로 이동.

### 휴대번호

- [x] 휴대번호 입력칸은 휴대전화를 넣음.
- [x] 휴대번호 입력칸은 중간에 자동으로 '-'가 들어감.
- [x] 휴대번호 입력칸은 올바른 휴대번호가 들어왔는지 감지할 수 있어야 됨.
- [ ] 휴대번호 입력칸 옆 x버튼을 누르면 써있던 내용이 삭제됨.
- [ ] 휴대번호 입력칸에 올바른 휴대번호가 들어가면 'v'표시가 들어감.
- [x] 휴대번호 입력칸을 다 입력한 이후 인증번호 받기 버튼이 활성화됨. 또한, 클릭 시, 아래 인증번호 입력칸이 활성화됨.
- [x] 인증번호는 실제 동작하지 않으며, setTimeout API를 통해 2초 뒤에 자동으로 입력칸에 들어가게 구현해야 됨.
- [x] 모든 값이 입력되면 다음으로 버튼이 활성화 되며, 클릭 시 다음 페이지로 이동 가능.

### 이메일, 추가정보입력

- [ ] 모든 입력칸은 제대로 된 입력값이 들어갔을 때 'v' 표시가 들어감.
- [x] 이메일 입력칸에는 이메일을 입력하며, 올바른 형식의 이메일이 들어갔는지 간단한 감지가 되야됨.
- [x] 이메일을 다 입력하고 옆의 중복확인 버튼을 누르면 닉네임, 비밀번호, 생년월일 입력칸이 나옴.
- [ ] 비밀번호 입력칸의 경우, 2가지 입력규칙이 존재함.
  - [x] 10자 이상, 대문자, 소문자, 숫자, 특수문자 중 2종류 조합.
  - [ ] 같은 숫자 혹은 연속된 숫자를 3개 이상 입력할 수 없음.
- [x] 생년월일의 경우 자동으로 "."이 중간에 표시됨. 또한, 올바른 생년월일을 감지가능함.
- [x] 모든 값이 정상적으로 클릭 시, "완료: 표시가 활성화 되고 로그인 페이지로 이동가능.
- [x] 완료 버튼을 클릭하면 DB에 입력한 정보를 토대로 계정이 저장됨.
