'use client';
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Layout, Flex} from 'antd';
import styles from './layout-style.module.scss';
import NavBar from "@/components/top-navbar";

const {Header, Footer, Sider, Content} = Layout;
const inter = Inter({ subsets: ["latin"] });

/*export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};*/


// const items = new Array(10).fill(null).map((_, index) => ({
//   key: index + 1,
//   label: `nav ${index + 1}`,

// }))

 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Flex gap="middle" wrap="wrap"> 
            <Layout className={styles.layoutStyle}>
              {/* <div className={styles.headerSection}> */}
              <Header className={styles.headerStyle}>
              <NavBar/>
              </Header>
              <Layout>
                <Content className={styles.contentStyle}>
                  {children}
                </Content>
              </Layout>
              <Footer className={styles.footerStyle}>Footer</Footer>
            </Layout>
        </Flex>
      </body>
    </html>
  );
}
