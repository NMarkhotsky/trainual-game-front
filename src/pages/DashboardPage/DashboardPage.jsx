/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { Icon } from '../../shared/components/Icon/Icon';
import {
  BlockBtn,
  BlockBtnAcordionGame,
  BlockBtnIcon,
  BlockBtnIconFlex,
  BlockBtnIconPadding,
  BlockInfoUser,
  BlockLinkFriends,
  BlockLinkFriendsBtn,
  BlockMenu,
  BlockMenuBtn,
  BlockMenuBtnAndAcordion,
  BlockSearch,
  BtnAdd,
  BtnInfoProfile,
  BtnOpenMenu,
  BtnOpenMenuIcon,
  ContentDashboard,
  Footer,
  FooterLogo,
  Header,
  IconInfo,
  IconMessage,
  IconProfiles,
  IconSearch,
  Logo,
  LogoIcon,
  Nav,
  Search,
  Section,
} from './DashboardPage.styled';
import logo from '../../assets/logo.png';
import logoFotter from '../../assets/img/powered-by-trainual.svg';

export const DashboardPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [selectedGame, setSelectedGame] = useState(false);

  const navigate = useNavigate();

  const handleToggleMenu = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
      setIsOpen(false);
    } else {
      setActiveMenu(menu);
      setIsOpen(true);
    }
  };

  return (
    <>
      <Section>
        <Nav>
          <BlockMenu>
            <div>
              <LogoIcon href="">
                <Logo src={logo} alt="Trainual" />
              </LogoIcon>
              <BtnOpenMenu>
                <BtnOpenMenuIcon>
                  <Icon
                    iconName="icon-arrow"
                    width={14}
                    height={14}
                    fill={'black'}
                  />
                </BtnOpenMenuIcon>
              </BtnOpenMenu>
            </div>

            <BlockMenuBtn>
              <BlockMenuBtnAndAcordion>
                <BlockBtn>
                  <BlockBtnIconFlex>
                    <BlockBtnIcon>
                      <Icon
                        iconName="icon-desk"
                        width={46}
                        height={46}
                        fill={'black'}
                      />
                    </BlockBtnIcon>
                    <p>My desk</p>
                  </BlockBtnIconFlex>
                </BlockBtn>
              </BlockMenuBtnAndAcordion>

              <BlockMenuBtnAndAcordion>
                <BlockBtn>
                  <BlockBtnIconFlex>
                    <BlockBtnIcon>
                      <Icon
                        iconName="icon-content"
                        width={46}
                        height={46}
                        fill={'black'}
                      />
                    </BlockBtnIcon>
                    <p>Content</p>
                  </BlockBtnIconFlex>
                </BlockBtn>
              </BlockMenuBtnAndAcordion>

              <BlockMenuBtnAndAcordion>
                <BlockBtn onClick={() => handleToggleMenu('people')}>
                  <BlockBtnIconFlex>
                    <BlockBtnIconPadding>
                      <Icon
                        iconName="icon-people"
                        width={20}
                        height={20}
                        fill={'black'}
                      />
                    </BlockBtnIconPadding>
                    <p>People</p>
                  </BlockBtnIconFlex>

                  <button>
                    <Icon
                      iconName="icon-arrow"
                      width={16}
                      height={16}
                      fill={'black'}
                    />
                  </button>
                </BlockBtn>
                {isOpen && activeMenu === 'people' && (
                  <div>
                    <BlockBtnAcordionGame>test text</BlockBtnAcordionGame>
                    <BlockBtnAcordionGame>test text</BlockBtnAcordionGame>
                  </div>
                )}
              </BlockMenuBtnAndAcordion>

              <BlockMenuBtnAndAcordion>
                <BlockBtn>
                  <BlockBtnIconFlex>
                    <BlockBtnIcon>
                      <Icon
                        iconName="icon-groups"
                        width={46}
                        height={46}
                        fill={'black'}
                      />
                    </BlockBtnIcon>
                    <p>Groups</p>
                  </BlockBtnIconFlex>
                </BlockBtn>
              </BlockMenuBtnAndAcordion>

              <BlockMenuBtnAndAcordion>
                <BlockBtn onClick={() => handleToggleMenu('reports')}>
                  <BlockBtnIconFlex>
                    <BlockBtnIcon>
                      <Icon
                        iconName="icon-reports"
                        width={46}
                        height={46}
                        fill={'black'}
                      />
                    </BlockBtnIcon>
                    <p>Reports</p>
                  </BlockBtnIconFlex>

                  <button>
                    <Icon
                      iconName="icon-arrow"
                      width={14}
                      height={14}
                      fill={'black'}
                    />
                  </button>
                </BlockBtn>
                {isOpen && activeMenu === 'reports' && (
                  <div>
                    <BlockBtnAcordionGame>test text</BlockBtnAcordionGame>
                    <BlockBtnAcordionGame>test text</BlockBtnAcordionGame>
                  </div>
                )}
              </BlockMenuBtnAndAcordion>

              <BlockMenuBtnAndAcordion>
                <BlockBtn onClick={() => handleToggleMenu('account')}>
                  <BlockBtnIconFlex>
                    <BlockBtnIconPadding>
                      <Icon
                        iconName="icon-account"
                        width={20}
                        height={20}
                        fill={'black'}
                      />
                    </BlockBtnIconPadding>
                    <p>Account</p>
                  </BlockBtnIconFlex>

                  <button>
                    <Icon
                      iconName="icon-arrow"
                      width={14}
                      height={14}
                      fill={'black'}
                    />
                  </button>
                </BlockBtn>

                {isOpen && activeMenu === 'account' && (
                  <div>
                    <BlockBtnAcordionGame>test text</BlockBtnAcordionGame>
                    <BlockBtnAcordionGame>test text</BlockBtnAcordionGame>
                  </div>
                )}
              </BlockMenuBtnAndAcordion>

              <BlockMenuBtnAndAcordion>
                <BlockBtn onClick={() => handleToggleMenu('game')}>
                  <BlockBtnIconFlex>
                    <BlockBtnIconPadding>
                      <Icon
                        iconName="icon-game"
                        width={24}
                        height={24}
                        fill={'black'}
                      />
                    </BlockBtnIconPadding>
                    <p>Games</p>
                  </BlockBtnIconFlex>
                  {/* {isOpen ? 'transform: rotate(45deg);' : 'transform: rotate(90deg);'} */}
                  <div>
                    <Icon
                      iconName="icon-arrow"
                      width={14}
                      height={14}
                      fill={'black'}
                    />
                  </div>
                </BlockBtn>

                {isOpen && activeMenu === 'game' && (
                  <div onClick={() => setSelectedGame(true)}>
                    <BlockBtnAcordionGame
                      onClick={() => navigate('/dashboard/game')}
                    >
                      Quiz game
                    </BlockBtnAcordionGame>
                    <BlockBtnAcordionGame>Lorem game</BlockBtnAcordionGame>
                  </div>
                )}
              </BlockMenuBtnAndAcordion>
            </BlockMenuBtn>
          </BlockMenu>

          <BlockLinkFriends>
            <BlockLinkFriendsBtn href="">
              <Icon iconName="icon-invite-teammates" width={16} height={16} />
              Invite teammates
            </BlockLinkFriendsBtn>
          </BlockLinkFriends>
        </Nav>
        <ContentDashboard>
          <div>
          <Header>
            <BlockSearch>
              <IconSearch>
                <Icon iconName="icon-search" width={16} height={16} />
              </IconSearch>

              <Search type="text" placeholder="Search Trainual..." />
            </BlockSearch>

            <BlockInfoUser>
              <IconInfo href="">
                <Icon iconName="icon-question" width={20} height={20} />
              </IconInfo>
              <IconMessage href="">
                <Icon iconName="icon-notifications" width={17} height={20} />
              </IconMessage>
              <BtnAdd>
                <Icon
                  iconName="icon-plus"
                  width={17}
                  height={20}
                  fill={'white'}
                />
              </BtnAdd>
              <BtnInfoProfile>
                <IconProfiles>DS</IconProfiles>
              </BtnInfoProfile>
            </BlockInfoUser>
          </Header>
          <Outlet />
          </div>
          
          <Footer>
            <FooterLogo>
              <Logo src={logoFotter} alt="Trainual" />
            </FooterLogo>
            <div>
              <a href="">Privacy</a> | <a href="">Terms</a>
            </div>
          </Footer>
        </ContentDashboard>
      </Section>
    </>
  );
};
