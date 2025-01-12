import React from 'react';
import Search from 'antd/es/input/Search';
import { Avatar, Layout, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './header.css';
import logo from '../../assets/HRF_Logo.jpg';
import { useOktaAuth } from '@okta/okta-react';
import { useLocation, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchDocs } from '../../state/actions';

const { Header } = Layout;

function MainHeader(props) {
  const { searchDocs } = props;
  const {
    authService: { logout },
    authState,
  } = useOktaAuth();
  const { pathname } = useLocation();

  if (pathname === '/login') return null;

  const onSearch = value => searchDocs(value, authState);

  return (
    <Layout>
      <Header className="header_div">
        <img src={logo} className="header_img" alt="HRF logo" />
        <Search
          className="search_bar"
          placeholder="Search"
          onSearch={onSearch}
        />
        <Link to="/">
          <Button className="bookmark_button" type="default">
            Bookmarks
          </Button>
        </Link>
        <Button onClick={logout} className="logout_button" type="default">
          Logout
        </Button>
        <Avatar className="avatars" size={45} icon={<UserOutlined />} />
      </Header>
    </Layout>
  );
}
export default connect(null, { searchDocs })(MainHeader);
