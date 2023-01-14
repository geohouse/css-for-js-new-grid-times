import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES, COLORS } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <ActionGroupMain>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroupMain>
        <Logo />
        <Wrapper>
          <Button>SUBSCRIBE</Button>
          <SubscriberQuestion href="#">
            Already a subscriber?
          </SubscriberQuestion>
        </Wrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  @media ${QUERIES.desktopAndUp} {
    /* background: ${COLORS.gray[100]}; */
    display: none;
  } ;
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const ActionGroupMain = styled(ActionGroup)`
  display: none;
  @media ${QUERIES.desktopAndUp} {
    display: flex;
    color: ${COLORS.gray[900]};
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  @media ${QUERIES.desktopAndUp} {
    justify-content: space-between;
    /* margin-left: auto;
    margin-right: auto; */
  }
`;

const SubscriberQuestion = styled.a`
  font-style: italic;
  font-weight: 400;
`;

const Wrapper = styled.div`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  /* flex: 1; */
`;

export default Header;
