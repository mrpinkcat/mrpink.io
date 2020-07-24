import React from 'react';
import ReactFullPage from '@fullpage/react-fullpage';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';


export default () => {
  return (
    <ReactFullPage
      navigation
      navigationTooltips={[undefined, 'Le commencement']}
      anchors={['', 'start']}
      sectionsColor={['#111111', '#222222']}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullPage.Wrapper>
            <FirstSection fullpageApi={fullpageApi} />
            {/* <SecondSection fullpageApi={fullpageApi} /> */}
          </ReactFullPage.Wrapper>
        );
      }}
    />
    
  );
}
