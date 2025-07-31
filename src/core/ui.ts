import { commands } from "./commandLoader";
import chalk from "chalk";

const BANNER = chalk.redBright(`
███████╗██╗░░░██╗███╗░░██╗░█████╗░
╚════██║╚██╗░██╔╝████╗░██║██╔══██╗
░░███╔═╝░╚████╔╝░██╔██╗██║██║░░╚═╝
██╔══╝░░░░╚██╔╝░░██║╚████║██║░░██╗
███████╗░░░██║░░░██║░╚███║╚█████╔╝
╚══════╝░░░╚═╝░░░╚═╝░░╚══╝░╚════╝░
`);

export function showSplash(version: string, platform: string) {
  console.clear();
  console.log(BANNER);
  console.log(chalk.cyanBright(`\n⚡ Zync v${version}  |  ${platform}\n`));

  const cmdList = Array.from(commands.values()).slice(0, 10);
  if (cmdList.length) {
    console.log(chalk.yellow("Commands:\n"));
    cmdList.forEach((cmd) => {
      console.log(`  ${chalk.green(cmd.name.padEnd(12))} ${chalk.gray(cmd.description)}`);
    });
    if (commands.size > 10) {
      console.log(chalk.gray(`\n… and ${commands.size - 10} more commands.`));
    }
  } else {
    console.log(chalk.red("No commands loaded.\n"));
  }

  console.log(chalk.gray("\nType a command below:"));
}
