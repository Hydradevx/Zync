package cmd

import (
	"fmt"
	"os"

	"github.com/spf13/cobra"
)

var rootCmd = &cobra.Command{
	Use:   "zync",
	Short: "Zync — Powerful Discord CLI tool",
	Long:  `Zync is a high-performance console tool for Discord and network utilities.`,
}

func Execute() {
	if err := rootCmd.Execute(); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}
