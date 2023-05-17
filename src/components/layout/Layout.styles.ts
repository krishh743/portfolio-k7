import { styled } from "@mui/material";

export const LayoutStylesWrapper = styled("div")`
  & .layout-header {
    margin: 20px 0 0 15px;
  }
  & .outlined-container {
    position: relative;
    margin: 20px 0 0 50px;
    overflow: auto;
    height: calc(100vh - 74px);
    border-radius: 10px;
    border-color: ${({ theme }) => theme.palette.grey[50]};

    & .side-menu-bar {
      position: absolute;
      inset: 0;
      width: 240px;
      z-index: 2;
      background-color: ${({ theme }) => theme.palette.grey[50]};

      & .link-button {
        display: block;
        text-decoration: none;
        padding: 25px 20px 0;
        color: ${({ theme }) => theme.palette.grey[300]};
      }
      & .active-state {
        font-family: "AlbertSans-Bold";
      }
    }
    & .layout-content {
      position: absolute;
      right: 0;
      width: calc(100% - 240px);
      /* height: calc(100% - 80px); */
      height: 100%;
      padding: 20px 20px 0;
      overflow: auto;
    }
  }
`;
