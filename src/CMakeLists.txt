cmake_minimum_required(VERSION 2.8)

project(myxrm)

set(SOURCE_HEADERS
        MicroCore.h
		tools.h
		monero_headers.h
		CurrentBlockchainStatus.h)

set(SOURCE_FILES
		MicroCore.cpp
		tools.cpp
		CmdLineOptions.cpp
		page.h
		rpccalls.cpp rpccalls.h
		version.h.in CurrentBlockchainStatus.cpp MempoolStatus.cpp MempoolStatus.h)

# make static library called libmyxrm
# that we are going to link to
# in the root CMakeLists.txt file
if (CMAKE_BUILD_TYPE STREQUAL Debug)
  add_library(myxrm
		${SOURCE_FILES})
else()
  add_library(myxrm
		STATIC
		${SOURCE_FILES})
endif()
