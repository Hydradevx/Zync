package cmd

import (
	"fmt"

	"github.com/fatih/color"
	"github.com/go-resty/resty/v2"
	"github.com/spf13/cobra"
)

var ipCmd = &cobra.Command{
	Use:   "ip",
	Short: "Show public IP and geolocation info",
	Run: func(cmd *cobra.Command, args []string) {
		client := resty.New()
		resp, err := client.R().SetResult(map[string]interface{}{}).Get("https://ipinfo.io/json")

		if err != nil {
			color.Red("Error: %v", err)
			return
		}

		data := *resp.Result().(*map[string]interface{})
		color.Green("Public IP Info:")
		for k, v := range data {
			fmt.Printf("%s: %v\n", k, v)
		}
	},
}

func init() {
	rootCmd.AddCommand(ipCmd)
}
