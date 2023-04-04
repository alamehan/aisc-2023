import { ThemeConfig } from 'antd/es/config-provider/context';

export const theme: ThemeConfig = {
  token: {
    borderRadius: 4,
    lineHeight: 1.2,
    lineHeightSM: 1.1,
    lineHeightLG: 1.2,
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol ,Noto Color Emoji',
    fontSize: 13,

    // ⚠️ Redefine Breakpoints ⚠️ //

    // Mobile
    screenXS: 360,
    screenXSMin: 0.1,
    screenXSMax: 360,

    // Tablet Potrait
    screenSM: 768,
    screenSMMin: 360.1,
    screenSMMax: 768,

    // Tablet Landscape
    screenMD: 1040,
    screenMDMin: 768.1,
    screenMDMax: 1040,

    // Desktop
    screenLG: 1440,
    screenLGMin: 1040.1,
    screenLGMax: 1440,

    // Desktop XL
    screenXL: 1728,
    screenXLMin: 1440.1,
    screenXLMax: 1728,

    // Desktop XXL
    screenXXL: 1920,
    screenXXLMin: 1728.1,
    
  },
    // components: {
    //   Menu: {
    //     radiusItem: 4,
    //     borderRadius: 4,
    //     borderRadiusLG: 4,
    //     colorBgContainer: '#fff',
    //     colorItemBg: '#F6F8FA',
    //     colorItemBgHover: '#EEF2F5',
    //     colorItemBgActive: '#EEF2F5',
    //     colorItemTextSelectedHorizontal: '#1677ff',
    //     colorItemBgSelected: '#efefef',
    //   },
    //   Table: {
    //     borderRadius: 4,
    //     borderRadiusLG: 4,
    //     lineHeight: 1.2,
    //     margin: 4,
    //     padding: 4,
    //     paddingContentVerticalLG: 4,
    //   },
    //   Form: {
    //     margin: 4,
    //   },
    // },
};
