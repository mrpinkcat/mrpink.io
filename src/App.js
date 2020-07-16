import React from 'react';
import ReactFullPage from '@fullpage/react-fullpage';
import FirstSection from './components/FirstSection';


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
            <FirstSection />
          </ReactFullPage.Wrapper>
        );
      }}
    />
    
  );
}
