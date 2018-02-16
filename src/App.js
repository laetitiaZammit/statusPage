import React, { Component } from 'react';
import { data } from './data';
import { regionTranslator } from './utils';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class App extends Component {

  state = {
    current: 'us-east-1',
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  render () {
    const aToZ = data.record.sort((a, b) => a.displayName.localeCompare(b.displayName));
    const arrCurrentRegion = aToZ.filter((obj) => { return obj.regionId === this.state.current; });

    return (
      <div id="wrapper">
        <div className="container">
          <div className="row">
            <h1>Elasticsearch clusters - Status Page</h1>
            <div className="wrapper-regions">
              <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
              >
              {
                this.props.regions.map((region, index) => {
                  return (
                    <Menu.Item key={region.id}>
                      {region.displayName}
                    </Menu.Item>
                  );
                })
              }
              </Menu>
            </div>
            <div className="page-content-wrapper">
              <ul>
                {
                  arrCurrentRegion.map((cluster, index) => {
                    return (
                      <li key={`cluster_${index}`}>
                        <h5>{cluster.displayName}
                          {cluster.user.isPremium &&
                            <Icon type="star" />
                          }
                        </h5>
                        <span className={cluster.healthy ? 'health color green' : 'health color pink' }>
                          {cluster.healthy ? 'healthy' : 'not healthy' }
                        </span>
                        <span className="kibana">
                          Kibana: {cluster.kibana.enabled ? 'enabled' : 'disabled'}
                        </span>
                        <span className="version">
                          {cluster.plan.version}
                        </span>
                      </li>
                    );
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  regions: [
    {
      id: "us-east-1",
      displayName: "Virginia"
    },
    {
      id: "us-west-1",
      displayName: "N. California"
    },
    {
      id: "us-west-2",
      displayName: "Oregon"
    },
    {
      id: "eu-west-1",
      displayName: "Ireland"
    },
    {
      id: "eu-central-1",
      displayName: "Frankfurt"
    },
    {
      id: "ap-southeast-1",
      displayName: "Singapore"
    },
    {
      id: "ap-southeast-2",
      displayName: "Sydney"
    },
    {
      id: "ap-northeast-1",
      displayName: "Tokyo"
    },
    {
      id: "sa-east-1",
      displayName: "Sao Paulo"
    }
  ]
};

export default App;
