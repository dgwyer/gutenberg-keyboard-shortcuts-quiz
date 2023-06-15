import React, { useState, useEffect } from 'react';

const questions = [
	{
		question: 'Display these keyboard shortcuts.',
		answer: 'Shift+Alt+H',
		options: ['Ctrl+Shift+Alt+M', 'Ctrl+Shift+\\', 'Shift+Alt+O', 'Shift+Alt+H']
	},
	{
		question: 'Switch between visual editor and code editor.',
		answer: 'Ctrl+Shift+Alt+M',
		options: ['Ctrl+Shift+\\', 'Ctrl+Shift+Alt+F', 'Alt+F10', 'Ctrl+Shift+Alt+M']
	},
	{
		question: 'Toggle distraction free mode.',
		answer: 'Ctrl+Shift+\\',
		options: ['Ctrl+Shift+Alt+M', 'Shift+Alt+O', 'Ctrl+Shift+Alt+F', 'Ctrl+Shift+\\']
	},
	{
		question: 'Toggle fullscreen mode.',
		answer: 'Ctrl+Shift+Alt+F',
		options: ['Shift+Alt+O', 'Ctrl+Shift+,', 'Ctrl+`', 'Ctrl+Shift+Alt+F']
	},
	{
		question: 'Open the block list view.',
		answer: 'Shift+Alt+O',
		options: ['Ctrl+Shift+Alt+F', 'Ctrl+Shift+,', 'Ctrl+`', 'Shift+Alt+O']
	},
	{
		question: 'Show or hide the settings sidebar.',
		answer: 'Ctrl+Shift+,',
		options: ['Shift+Alt+O', 'Ctrl+`', 'Shift+Alt+N', 'Ctrl+Shift+,']
	},
	{
		question: 'Navigate to the next part of the editor.',
		answer: 'Ctrl+`',
		options: ['Ctrl+Shift+Alt+M', 'Ctrl+Shift+\\', 'Shift+Alt+O', 'Ctrl+`']
	},
	{
		question: 'Navigate to the previous part of the editor.',
		answer: 'Ctrl+Shift+`',
		options: ['Shift+Alt+O', 'Ctrl+Shift+,', 'Ctrl+`', 'Ctrl+Shift+Alt+F']
	},
	{
		question: 'Navigate to the nearest toolbar.',
		answer: 'Alt+F10',
		options: ['Ctrl+Shift+Alt+M', 'Ctrl+Shift+\\', 'Shift+Alt+O', 'Alt+F10']
	},
	{
		question: 'Save your changes.',
		answer: 'Ctrl+S',
		options: ['Shift+Alt+H', 'Ctrl+Shift+\\', 'Ctrl+K', 'Ctrl+S']
	},
	{
		question: 'Undo your last changes.',
		answer: 'Ctrl+Z',
		options: ['Ctrl+Shift+D', 'Ctrl+Shift+Alt+F', 'Ctrl+Z', 'Ctrl+Y']
	},
	{
		question: 'Redo your last undo.',
		answer: 'Ctrl+Y',
		options: ['Ctrl+Shift+D', 'Ctrl+Shift+Alt+F', 'Ctrl+Z', 'Ctrl+Y']
	},
	{
		question: 'Select all text when typing, press again to select all blocks.',
		answer: 'Ctrl+A',
		options: ['Ctrl+K', 'Ctrl+Shift+D', 'Ctrl+A', 'Ctrl+B']
	},
	{
		question: 'Clear selection.',
		answer: 'Escape',
		options: ['Shift+Alt+D', 'Escape', 'Ctrl+Shift+K', 'Ctrl+U']
	},
	{
		question: 'Duplicate the selected block(s).',
		answer: 'Ctrl+Shift+D',
		options: ['Ctrl+Shift+D', 'Ctrl+Shift+Alt+M', 'Shift+Alt+D', 'Ctrl+Shift+Y']
	},
	{
		question: 'Remove the selected block(s).',
		answer: 'Shift+Alt+Z',
		options: ['Ctrl+Shift+D', 'Shift+Alt+Z', 'Ctrl+Shift+Y', 'Ctrl+Shift+Alt+F']
	},
	{
		question: 'Insert a new block before the selected block(s).',
		answer: 'Ctrl+Alt+T',
		options: ['Shift+Alt+D', 'Ctrl+Alt+T', 'Ctrl+Shift+D', 'Ctrl+Shift+Alt+F']
	},
	{
		question: 'Insert a new block after the selected block(s).',
		answer: 'Ctrl+Alt+Y',
		options: ['Ctrl+Shift+D', 'Ctrl+Alt+Y', 'Shift+Alt+D', 'Ctrl+Shift+Alt+M']
	},
	{
		question: 'Delete selection.',
		answer: 'Del',
		options: ['Ctrl+Shift+Alt+M', 'Shift+Alt+D', 'Del', 'Ctrl+Shift+Alt+F']
	},
	{
		question: 'Move the selected block(s) up.',
		answer: 'Ctrl+Shift+Alt+T',
		options: ['Ctrl+Shift+D', 'Ctrl+Shift+Alt+T', 'Shift+Alt+D', 'Ctrl+Shift+Y']
	},
	{
		question: 'Move the selected block(s) down.',
		answer: 'Ctrl+Shift+Alt+Y',
		options: ['Ctrl+Shift+D', 'Ctrl+Shift+Alt+Y', 'Shift+Alt+D', 'Ctrl+Shift+Alt+F']
	},
	{
		question: 'Change the block type after adding a new paragraph.',
		answer: '/',
		options: ['Ctrl+Shift+D', 'Shift+Alt+D', '/', 'Ctrl+Shift+Alt+M']
	},
	{
		question: 'Make the selected text bold.',
		answer: 'Ctrl+B',
		options: ['Ctrl+Shift+Alt+M', 'Ctrl+I', 'Ctrl+B', 'Shift+Alt+D']
	},
	{
		question: 'Make the selected text italic.',
		answer: 'Ctrl+I',
		options: ['Ctrl+Shift+Alt+M', 'Ctrl+I', 'Ctrl+Shift+Alt+F', 'Shift+Alt+D']
	},
	{
		question: 'Convert the selected text into a link.',
		answer: 'Ctrl+K',
		options: ['Ctrl+Shift+K', 'Ctrl+K', 'Shift+Alt+D', 'Ctrl+U']
	},
	{
		question: 'Remove a link.',
		answer: 'Ctrl+Shift+K',
		options: ['Ctrl+Shift+K', 'Ctrl+K', 'Shift+Alt+D', 'Ctrl+U']
	},
	{
		question: 'Insert a link to a post or page.',
		answer: '[[',
		options: ['Ctrl+Shift+D', '[[', 'Ctrl+Shift+Y', 'Ctrl+Shift+Alt+F']
	},
	{
		question: 'Underline the selected text.',
		answer: 'Ctrl+U',
		options: ['Ctrl+U', 'Shift+Alt+D', 'Ctrl+Shift+D', 'Ctrl+Shift+Alt+M']
	},
	{
		question: 'Strikethrough the selected text.',
		answer: 'Shift+Alt+D',
		options: ['Ctrl+Shift+D', 'Shift+Alt+D', 'Ctrl+Shift+Y', 'Ctrl+Shift+Alt+F']
	},
	{
		question: 'Make the selected text inline code.',
		answer: 'Shift+Alt+X',
		options: ['Shift+Alt+X', 'Ctrl+Shift+Alt+T', 'Ctrl+Shift+Alt+Y', 'Ctrl+Shift+Alt+F']
	},
	{
		question: 'Convert the current heading to a paragraph.',
		answer: 'Shift+Alt+0',
		options: ['Shift+Alt+D', 'Ctrl+Shift+Alt+F', 'Shift+Alt+0', 'Ctrl+Shift+Alt+M']
	},
	{
		question: 'Convert the current paragraph or heading to a heading of level 1 to 6.',
		answer: 'Shift+Alt+1-6',
		options: ['Ctrl+Shift+D', 'Shift+Alt+1-6', 'Ctrl+Shift+Y', 'Ctrl+Shift+Alt+F']
	}
];

const Quiz = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [selectedOption, setSelectedOption] = useState('');
	const [score, setScore] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [shuffledQuestions, setShuffledQuestions] = useState([]);
	const [questionResults, setQuestionResults] = useState([]);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

	useEffect(() => {
		shuffleQuestions();
	}, []);

	const shuffleQuestions = () => {
		const shuffled = [...questions].sort(() => Math.random() - 0.5);
		const randomSubset = shuffled.slice(0, 10);
		setShuffledQuestions(randomSubset);
	};

	const handleOptionSelect = (option) => {
		setSelectedOption(option);
	};

	const handleNextQuestion = () => {
		const isCorrect = selectedOption === shuffledQuestions[currentQuestion].answer;

		setQuestionResults([
			...questionResults,
			{
				question: shuffledQuestions[currentQuestion].question,
				answer: shuffledQuestions[currentQuestion].answer,
				selectedOption,
				isCorrect,
			},
		]);

		if (isCorrect) {
			setScore(score + 1);
		}

		setSelectedOption('');
		setCurrentQuestion(currentQuestion + 1);
		setCurrentQuestionIndex(currentQuestionIndex + 1);
	};

	const handleFinishQuiz = () => {
		const isCorrect = selectedOption === shuffledQuestions[currentQuestion].answer;

		setQuestionResults([
			...questionResults,
			{
				question: shuffledQuestions[currentQuestion].question,
				answer: shuffledQuestions[currentQuestion].answer,
				selectedOption,
				isCorrect,
			},
		]);

		if (isCorrect) {
			setScore(score + 1);
		}

		setShowScore(true);
	};

	if (!shuffledQuestions.length) return <div>Loading...</div>;

	return (
		<div className="container mx-auto px-4 py-8 max-w-lg">
			{showScore ? (
				<div className="bg-white p-6 rounded shadow">
					<h2 className="text-2xl font-bold mb-4">Quiz Result</h2>
					<p className="mb-2">You scored {score} out of {shuffledQuestions.length}!</p>
					<div className="mt-4">
						<h3 className="text-lg font-semibold mb-2">Summary:</h3>
						{questionResults.map((result, index) => (
							<div key={index} className="mb-2">
								<p>
									<span className="font-bold">Question:</span> {result.question}
								</p>
								<p>
									<span className="font-bold">Answer:</span> {result.answer}
								</p>
								<p>
									<span className="font-bold">Your Answer:</span> {result.selectedOption}
								</p>
								<p>
									<span className="font-bold">Result:</span>{' '}
									<span className={result.isCorrect ? 'text-green-600' : 'text-red-600'}>
										{result.isCorrect ? 'Correct' :
											'Incorrect'}
									</span>
								</p>
								<hr className="my-2" />
							</div>
						))}
						<p className="mt-2">
							Total questions: {shuffledQuestions.length}, Correct answers: {score}
						</p>
						<button
							className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
							onClick={() => window.location.reload()}
						>
							Restart Quiz
						</button>
					</div>
				</div>
			) : (
				<div className="bg-white p-6 rounded shadow">
					<h2 className="text-2xl font-bold mb-4">Gutenberg Keyboard Shortcuts Quiz</h2>
						<p className="mb-4">{shuffledQuestions[currentQuestion].question} ({`${currentQuestionIndex + 1} of ${shuffledQuestions.length}`})</p>
					<div className="flex flex-col space-y-2">
						{shuffledQuestions[currentQuestion].options.map((option, index) => (
							<button
								key={index}
								className={`${selectedOption === option
										? 'bg-blue-500 text-white'
										: 'bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 text-gray-800'
									} px-4 py-2 rounded ${selectedOption === option ? 'ring-2 ring-blue-500' : ''
									}`}
								onClick={() => handleOptionSelect(option)}
							>
								{option}
							</button>
						))}
					</div>
					{currentQuestion < shuffledQuestions.length - 1 ? (
						<button
							className={`${!selectedOption ? 'bg-gray-400 text-gray-800' : 'bg-blue-500 text-white'
								} px-4 py-2 rounded mt-4`}
							onClick={handleNextQuestion}
							disabled={!selectedOption}
						>
							Next Question
						</button>
					) : (
						<button
							className={`${!selectedOption ? 'bg-gray-400 text-gray-800' : 'bg-blue-500 text-white'
								} px-4 py-2 rounded mt-4`}
							onClick={handleFinishQuiz}
							disabled={!selectedOption}
						>
							Finish Quiz
						</button>
					)}
				</div>
			)}
		</div>
	);
};

export default Quiz;
