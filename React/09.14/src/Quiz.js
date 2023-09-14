import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        {/* {Outlet은 라우트에서 자식을 ㅗ있는 컴포넌트를 꺼내서 보여주는 컴포넌트} */}
        <Route path="/users/*" element={<Users />} />
        {/* 이 안에 중첩할 라우트 들이 들어갑니다 */}
        <Route path="/users/coupon" element={<CouponPage />} />
        <Route path="/users/question" element={<QuestionPage />} />
        <Route path="/users/notice" element={<NoticePage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route
          path="/products/:id/notice"
          element={<ProductDetailNoticePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

function ProductDetailNoticePage() {
  const { id } = useParams();
  return <h1>{id}번 상품 상세 알림? 페이지</h1>;
}

function CouponPage() {
  return <h1>쿠폰</h1>;
}

function NoticePage() {
  return <h1>알림</h1>;
}

function QuestionPage() {
  return <h1>?</h1>;
}

function ProductDetailPage() {
  const { id } = useParams();
  return <h1>{id}번 상품 입니다~!</h1>;
}

function Cart() {
  return <h1>카트</h1>;
}

function Users() {
  return <h1>유저들</h1>;
}

function HomePage() {
  return <h1>홈페이지</h1>;
}

export default App;
