import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import './Home.css';

const Home = ({ id, go }) => (
	<Panel id={id}>
		<PanelHeader>Пожертвования</PanelHeader>

		<Group title="Navigation Example">
			<Div className="center">
				<Div className="text" style={{ paddingTop: 60, paddingBottom: 60, color: 'gray' }}>
            		У Вас пока нет сборов.
					<p>У вас пока нет сборов. </p>
          		</Div>
				<Button className="button" onClick={go} data-to="persik">
					Создать сбор
				</Button>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired
};

export default Home;
