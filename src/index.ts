import { chalk, figlet, inquirer, execa } from './imports';


const introduce = () => {
    console.log(
        chalk.yellow(
            figlet.textSync('Owlrun utility', {})
        )
    );
    console.log(
        chalk.yellow(
            '--------------'
        )
    );
    console.log(
        chalk.red(
            'Owlrun utility'
        )
    );
    console.log(
        chalk.red(
            'It\'s for your pleasure.'
        )
    );
    console.log(
        chalk.yellow(
            '--------------'
        )
    );
}

const installActionsFunc = () => {
    inquirer.prompt([{
        type: 'list',
        name: 'install',
        message: 'What do you want to install? ',
        choices: ['React-starter', 'Angular-starter', 'Webpack4-starter']
    }]).then((e: any) => {
        if (e.install === 'React-starter') {
            inquirer
                .prompt([{ type: "Input", name: 'projname', message: 'Please send me a name of project!' }])
                .then((answers: any) => {
                    doIt('git', ['clone', 'https://github.com/AndersDeath/owl-react-starter.git', answers.projname]);
                });
        }
        if (e.install === 'Angular-starter') {
            inquirer
                .prompt([{ type: "Input", name: 'projname', message: 'Please send me a name of project!' }])
                .then((answers: any) => {
                    doIt('git', ['clone', 'https://github.com/AndersDeath/owl-ng-starter.git', answers.projname]);
                });
        }
        if (e.install === 'Webpack4-starter') {
            inquirer
                .prompt([{ type: "Input", name: 'projname', message: 'Please send me a name of project!' }])
                .then((answers: any) => {
                    doIt('git', ['clone', 'https://github.com/AndersDeath/webpack4-pug-sass-images-fonts-sarter.git', answers.projname]);
                });
        }
    });
}


const doIt = (command: any, argumenti: any = []) => {
    execa(command, argumenti, { stdio: 'inherit' })
}

introduce();

inquirer.prompt([{
    type: 'list',
    name: 'projects',
    message: 'What do you want to do?:',
    choices: ['install', 'exit']
}]).then((e: any) => {
    if (e.projects === 'install') {
        installActionsFunc();
    }
    if (e.projects === 'exit') {
        console.log(
            chalk.red(
                'Owlrun utility is closed'
            )
        );
    }
});
