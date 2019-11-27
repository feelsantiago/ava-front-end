import { CursoModel } from '../models/curso.model';

export const cursos: Array<CursoModel> = [
	{
		id: '1d0449',
		title: 'React',
		subscription: false,
		description: 'Aprenda a criar um app react com rotas autenticas e utilizando Redux.',
		professor: {
			name: 'Filipe',
			description: 'Senior React Developer At Ava da Kebrada'
		},
		owner: false,
		modules: [
			{
				name: 'Modulo 1',
				lessons: [
					{
						video: 'https://www.youtube.com/embed/tbLziJchz48',
						title: 'React JS Criando um App do Zero',
						description: 'Criando um App em React passo por passo',
						messages: [
							{
								date: new Date(),
								name: 'Filipe',
								message: 'Olá pessoal, usem esse espaço para discutir sobre a aula',
								owner: false
							}
						],
						exercises: [
							{
								question:
									'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator?',
								alternatives: [
									{
										label: 'a',
										correct: true
									},
									{
										label: 'b',
										correct: true
									},
									{
										label: 'c',
										correct: true
									},
									{
										label: 'd',
										correct: true
									}
								]
							}
						]
					},
					{
						video: 'https://www.youtube.com/embed/sYe4r8WXGQg',
						title: 'Autenticando Rotas',
						description: 'Controlando autenticação nas rotas',
						messages: [
							{
								date: new Date(),
								name: 'Filipe',
								message: 'Olá pessoal, usem esse espaço para discutir sobre a aula',
								owner: false
							}
						],
						exercises: [
							{
								question:
									'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator?',
								alternatives: [
									{
										label: 'a',
										correct: true
									},
									{
										label: 'b',
										correct: true
									},
									{
										label: 'c',
										correct: true
									},
									{
										label: 'd',
										correct: true
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Modulo 2',
				lessons: [
					{
						video: 'https://www.youtube.com/embed/u99tNt3TZf8',
						title: 'Desvendado Redux',
						description: 'Descubra como usar o Redux nas suas aplicações',
						messages: [
							{
								date: new Date(),
								name: 'Filipe',
								message: 'Olá pessoal, usem esse espaço para discutir sobre a aula',
								owner: false
							}
						],
						exercises: [
							{
								question:
									'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator?',
								alternatives: [
									{
										label: 'a',
										correct: true
									},
									{
										label: 'b',
										correct: true
									},
									{
										label: 'c',
										correct: true
									},
									{
										label: 'd',
										correct: true
									}
								]
							}
						]
					}
				]
			}
		]
	},
	{
		id: '0',
		title: 'Tese',
		subscription: false,
		description: 'Teste',
		professor: {
			name: 'Filipe',
			description: 'Senior React Developer At Ava da Kebrada'
		},
		owner: true,
		modules: [
			{
				name: 'teste',
				lessons: []
			}
		]
	}
];
