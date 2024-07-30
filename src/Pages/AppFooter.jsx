import { Layout } from "antd";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
        backgroundColor: "#73B0FF",
        color: "white"
      }}
    >
      ©2023 Created by Timothy
    </Footer>
  );
};

export default AppFooter;