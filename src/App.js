import React from 'react';
import ReactFullPage from '@fullpage/react-fullpage';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';


export default () => {
  return (
    <ReactFullPage
      navigation
      navigationTooltips={[undefined]}
      anchors={['']}
      sectionsColor={['#111111']}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullPage.Wrapper>
            <FirstSection fullpageApi={fullpageApi} />
            <SecondSection />
          </ReactFullPage.Wrapper>
        );
      }}
    />
    
  );
}
