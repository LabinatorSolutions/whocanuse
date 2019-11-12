import React, { Component } from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types';



/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/

const Container = styled('div')(props => ({
  gridArea: '1 / 1 / 2 / 4',
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  padding: '20px',
  'svg, g': {
    fill: '#' + props.color,
  },
  'svg': {
    margin: 'auto'
  },
  '@media screen and (max-width: 960px)': {
    margin: '0 auto',
    width: '60%'
  }
}))


/*----------------------------------------------------------
   Logo Component
----------------------------------------------------------*/

export default class Logo extends Component {
  static propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
  }
  render() {
    let { children, ...rest } = this.props;
    return (
      <Container {...rest}>
        <svg height="37" viewBox="0 0 346 37" width="260" xmlns="http://www.w3.org/2000/svg"><g fill="#fff" fillRule="evenodd"><path d="m6.62400026 36-6.14400024-24.624001v-.48h7.24800029l3.79200019 17.1840007h.192l3.3600001-17.1840007h9.8880004l3.3600001 17.1840007h.192l3.7920002-17.1840007h7.2000003v.48l-6.1440003 24.624001h-9.7440004l-3.4560001-17.1840007h-.192l-3.6000001 17.1840007zm34.16000144 0v-35.52000141h7.3920003v12.81600051h.192c1.392-1.6320001 3.6000001-2.8320001 6.8640002-2.8320001 5.5680003 0 9.3120004 3.4560001 9.3120004 9.0240003v16.5120007h-7.3920003v-14.2080006c0-2.8800001-1.296-4.6080001-4.2240002-4.6080001-2.6400001 0-4.7520001 1.872-4.7520001 4.8960001v13.9200006zm37.8080015.432c-8.1600003 0-12.5280005-5.4240002-12.5280005-12.9600005s4.4640002-13.0080005 12.5280005-13.0080005 12.5280005 5.4720002 12.5280005 13.0080005c0 7.4880003-4.3680002 12.9600005-12.5280005 12.9600005zm0-6.4800002c3.0720001 0 4.9920002-1.9200001 4.9920002-6.4800003s-1.9200001-6.5280003-4.9920002-6.5280003-4.9920002 2.0160001-4.9920002 6.5280003c0 4.5600002 1.9680001 6.4800003 4.9920002 6.4800003z" /><path d="m105.824004 36.432c-8.016 0-12.6240001-5.3760002-12.6240001-13.0080005 0-7.5840003 4.4160001-12.9600005 12.4320001-12.9600005 7.440001 0 11.280001 4.5120002 11.616001 10.3200004h-7.44c-.24-2.2080001-1.776001-3.8400002-4.176001-3.8400002-3.12 0-4.896 1.9680001-4.896 6.4800003 0 4.5600002 1.776 6.5280003 4.896 6.5280003 2.4 0 3.936001-1.6320001 4.176001-3.8400002h7.44c-.336 5.8080002-4.128 10.3200004-11.424001 10.3200004zm21.008001 0c-5.664 0-8.784-3.4080001-8.784-7.8720003 0-4.6560002 3.168-7.7280003 10.08-7.7280003 1.872 0 4.368.384 5.376001.72v-2.0640001c0-1.728-1.104001-3.0720001-3.840001-3.0720001-2.304 0-3.648 1.2480001-3.648 2.7840001h-6.912c0-4.7040002 3.408-8.7360003 10.8-8.7360003 6.864001 0 10.992001 3.7920001 10.992001 9.0240003v16.5120007h-6.624l-.528-2.2560001h-.192c-1.392001 1.5840001-3.600001 2.6880001-6.720001 2.6880001zm1.872-5.7600002c3.024 0 4.800001-1.7760001 4.800001-3.8400002v-.24c-1.536001-.624-3.072001-.816-4.512001-.816-2.4 0-3.648 1.056-3.648 2.4000001 0 1.44 1.152 2.4960001 3.36 2.4960001zm14.912001 5.3280002v-25.104001h6.624l.576 2.4000001h.192c1.392-1.6320001 3.6-2.8320001 6.864001-2.8320001 5.568 0 9.312 3.4560001 9.312 9.0240003v16.5120007h-7.392v-14.2080006c0-2.8800001-1.296-4.6080001-4.224001-4.6080001-2.64 0-4.56 1.872-4.56 4.8960001v13.9200006z" opacity=".6" /><path d="m185.000001 10.895999h7.392v15.0720006c0 5.3280002-3.264 10.4640004-11.472 10.4640004h-.048c-8.208001 0-11.472001-5.1360002-11.472001-10.4640004v-15.0720006h7.392v13.9680006c0 2.8800001 1.2 4.6080001 4.128001 4.6080001 2.88 0 4.08-1.728 4.08-4.6080001zm20.528001 25.536001c-7.824001 0-10.992001-3.7920001-11.136001-8.9280003h7.392c0 1.392 1.104 2.7840001 3.744001 2.7840001 2.64 0 3.552-.9600001 3.552-1.8240001 0-1.104-.816-1.6320001-2.544-1.9680001l-3.696001-.72c-4.032-.768-7.68-2.8320001-7.68-7.8720003 0-4.0800002 3.6-7.4400003 10.320001-7.4400003 6.528 0 10.464 3.7440001 10.464 8.4000003h-7.296c.048-1.152-.816-2.5920001-3.312-2.5920001-1.824001 0-2.928001.768-2.928001 1.7280001 0 .96.672 1.488 1.872001 1.7280001l4.8.912c3.84.72 7.44 2.4960001 7.44 7.7760003 0 5.1840002-4.608 8.0160003-10.992 8.0160003zm24.224001 0c-7.920001 0-12.432001-5.7600002-12.432001-12.9600005 0-7.1040003 4.128-13.0080005 12.288001-13.0080005 7.68 0 12 5.4240002 12 12.2400005v2.7360001h-16.752001c.048 2.9280001 1.536 4.9920002 4.896001 4.9920002 2.736 0 3.936-1.3440001 4.368-2.4960001h7.152c-.672 4.5120002-4.656 8.4960003-11.52 8.4960003zm-4.848001-15.6480006h9.168001c-.144-2.4000001-1.536-4.2720002-4.464-4.2720002-3.168001 0-4.560001 1.8720001-4.704001 4.2720002z" opacity=".3" /><path d="m249 36.432c-2.832 0-4.32-1.632-4.32-4.3200002 0-2.6400001 1.488-4.2720001 4.32-4.2720001 2.736 0 4.32 1.632 4.32 4.2720001 0 2.6880002-1.584 4.3200002-4.32 4.3200002zm18.224001 0c-8.016 0-12.624-5.3760002-12.624-13.0080005 0-7.5840003 4.416-12.9600005 12.432-12.9600005 7.44 0 11.28 4.5120002 11.616 10.3200004h-7.44c-.24-2.2080001-1.776-3.8400002-4.176-3.8400002-3.12 0-4.896 1.9680001-4.896 6.4800003 0 4.5600002 1.776 6.5280003 4.896 6.5280003 2.4 0 3.936-1.6320001 4.176-3.8400002h7.44c-.336 5.8080002-4.128 10.3200004-11.424 10.3200004zm24.752001 0c-8.16 0-12.528-5.4240002-12.528-12.9600005s4.464-13.0080005 12.528-13.0080005 12.528001 5.4720002 12.528001 13.0080005c0 7.4880003-4.368001 12.9600005-12.528001 12.9600005zm0-6.4800002c3.072 0 4.992-1.9200001 4.992-6.4800003s-1.92-6.5280003-4.992-6.5280003-4.992 2.0160001-4.992 6.5280003c0 4.5600002 1.968 6.4800003 4.992 6.4800003zm43.904002-19.4880008c5.568 0 9.312 3.4560001 9.312 9.0240003v16.5120007h-7.392v-14.2080006c0-2.8800001-1.008-4.6080001-3.936-4.6080001-2.64 0-4.176 1.92-4.176 4.8960001v13.9200006h-7.296001v-14.2080006c0-2.8800001-1.008-4.6080001-3.936-4.6080001-2.64 0-4.56 1.872-4.56 4.8960001v13.9200006h-7.392v-25.104001h6.624l.576 2.4000001h.192c1.392-1.6320001 3.6-2.8320001 6.864-2.8320001 3.408 0 6 1.2 7.488001 3.4080001h.144c1.296-1.632 3.744-3.4080001 7.488-3.4080001z" opacity=".1" /></g></svg>
      </Container>);
  }
}