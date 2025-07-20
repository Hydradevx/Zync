.PHONY: all build run clean

# Directories
SRC_DIR := src
INCLUDE_DIR := include
BUILD_DIR := dist

# Detect OS
UNAME_S := $(shell uname -s)

ifeq ($(OS),Windows_NT)
	EXT := .exe
else ifeq ($(UNAME_S),Darwin)
	EXT :=
else
	EXT :=
endif

# Compiler setup
CXX := g++
CXXFLAGS := -O2 -std=c++17 -I$(INCLUDE_DIR)

# Sources and target
SRCS := $(wildcard $(SRC_DIR)/*.cpp)
TARGET := $(BUILD_DIR)/zync$(EXT)

# Default
all: build

# Make sure build directory exists
$(BUILD_DIR):
	@mkdir -p $(BUILD_DIR)

# Build rule
build: $(BUILD_DIR)
	$(CXX) $(CXXFLAGS) $(SRCS) -o $(TARGET)
	@echo "✅ Built: $(TARGET)"

run: build
	@$(TARGET)

clean:
	@rm -rf $(BUILD_DIR)
	@echo "🧹 Cleaned build artifacts"