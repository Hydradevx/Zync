#include <iostream>
#include <string>

int main(int argc, char* argv[]) {
    std::cout << "⚡ Zync CLI" << std::endl;

    if (argc > 1) {
        std::string command = argv[1];
        if (command == "ip") {
            std::cout << "IP lookup not implemented yet!" << std::endl;
        } else {
            std::cout << "Unknown command: " << command << std::endl;
        }
    } else {
        std::cout << "Usage: zync <command>" << std::endl;
    }

    return 0;
}
